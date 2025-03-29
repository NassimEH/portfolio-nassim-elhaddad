
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Configuration essentielle pour GitHub Pages - utilise le chemin relatif
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations pour GitHub Pages
    assetsDir: "assets",
    sourcemap: false,
    outDir: "dist",
    // Amélioration du chemin des assets pour éviter les 404
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
  },
}));
