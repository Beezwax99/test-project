import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'assets'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].min.js',
        chunkFileNames: '[name].min.js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'css/[name].min.css';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    minify: 'terser',
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
    port: 3000,
  },
});