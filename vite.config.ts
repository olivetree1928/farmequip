import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
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
      },
    },
    assetsInlineLimit: 0, // 不内联任何资源，都作为文件处理
    chunkSizeWarningLimit: 1500, // 增加chunk大小警告限制
    target: 'es2015', // 更好的浏览器兼容性
    minify: 'esbuild', // 使用esbuild进行快速压缩
  },
  server: {
    // 开发服务器优化
    hmr: {
      overlay: false,
    },
  },
});
