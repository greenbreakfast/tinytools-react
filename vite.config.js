import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import dotenv from 'dotenv'
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/assembly': {
        target: 'https://api.assemblyai.com/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/assembly/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('authorization', process.env.VITE_AAI_API_KEY);
          });
        }
      }
    }
  }
})
