import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
          data: ['./src/data/equipmentData'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1500,
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: true,
    assetsDir: 'assets',
  },
  server: {
    // 开发服务器优化
    hmr: {
      overlay: false,
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  }
}));
