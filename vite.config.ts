
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path doit être le nom du repo pour GitHub Pages
  base: "/portfolio-nassim-elhaddad/",
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
    assetsDir: "assets",
    sourcemap: false,
    outDir: "dist",
    // Configuration des chemins de sortie pour GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Assurez-vous que tous les assets ont des chemins corrects
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js"
      }
    },
  },
}));
