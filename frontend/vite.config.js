import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/emotionDetector': {
        target: 'http://127.0.0.1:5000', // Puerto donde corre Flask
        changeOrigin: true
      }
    }
  }

})
