
import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for assets in production build
  base: './',
  
  // Configure server options for WebContainer
  server: {
    host: true,
    hmr: true
  },
  
  // Optimize build settings
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});