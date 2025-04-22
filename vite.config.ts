import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Add base URL if deploying to a subdirectory
  // base: '/your-repo-name/',
  
  // Production build optimizations
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Changed from 'terser' to 'esbuild'
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split large dependencies into separate chunks
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover']
        }
      }
    }
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


