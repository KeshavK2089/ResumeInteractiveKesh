import postcss from "postcss";

// Tailwind CSS calls `postcss.parse` internally without providing a `from` option, which triggers a
// warning in PostCSS 8.4+. Patch the parser to default the value so builds remain quiet and assets
// are processed with consistent source metadata.
const originalParse = postcss.parse;
postcss.parse = (css, opts = {}) => originalParse(css, { from: "inline.css", ...opts });

const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("did not pass the `from` option to `postcss.parse`")
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
