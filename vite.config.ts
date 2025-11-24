import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ mode }) => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
    {
      name: "copy-attached-assets",
      apply: "build",
      async closeBundle() {
        const sourceDir = path.resolve(import.meta.dirname, "attached_assets");
        const destinationDir = path.resolve(
          import.meta.dirname,
          "dist/public/attached_assets",
        );

        try {
          await fs.promises.access(sourceDir, fs.constants.R_OK);
        } catch {
          console.warn(`⚠️  attached_assets directory not found at ${sourceDir}`);
          return;
        }

        await fs.promises.rm(destinationDir, { recursive: true, force: true });
        await fs.promises.mkdir(destinationDir, { recursive: true });
        await fs.promises.cp(sourceDir, destinationDir, { recursive: true });
      },
    },
  ];

  if (mode !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");
    plugins.push(cartographer(), devBanner());
  }

  return {
    base: process.env.BUILD_BASE || "/",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
