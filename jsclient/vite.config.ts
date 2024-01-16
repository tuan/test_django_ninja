import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  // this is the same as the STATIC_URL in django
  // the vite devserver will serve
  // assets via http://localhost:port/static/
  base: "/static/vite/",
  server: {
    // this is needed to handle bundled assets such as images
    origin: "http://localhost:5173",
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("./dist"),
    rollupOptions: {
      input: {
        main: resolve("./src/main.tsx"),
      },
    },
  },
});
