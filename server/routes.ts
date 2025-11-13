import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve PDFs with aggressive caching to reduce bandwidth costs
  // Cache for 1 year since resume/research PDFs rarely change
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets'), {
    maxAge: '31536000000', // 1 year in milliseconds
    immutable: true,
    setHeaders: (res, filePath) => {
      // Only cache PDFs aggressively, not other files
      if (filePath.endsWith('.pdf')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
