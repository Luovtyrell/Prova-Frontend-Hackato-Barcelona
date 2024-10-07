import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/random': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/random/, '/random')
      },
      '/filter': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/filter/, '/filter')
      }
    }
  }
});
