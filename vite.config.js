import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ThemeLib",
      fileName: (format) => `theme-lib.${format}.js`
    }
  }
});