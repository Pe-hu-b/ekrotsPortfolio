import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project-bolt-sb1-fuwlwpde/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})