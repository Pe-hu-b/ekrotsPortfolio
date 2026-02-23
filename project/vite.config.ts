import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PortfolioEkrots/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})