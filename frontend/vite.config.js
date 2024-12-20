import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server URL
        changeOrigin: true,
        secure: false, // Use this if you're dealing with HTTPS issues
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})