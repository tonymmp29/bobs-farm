import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración específica para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/bobs-farm/',
  build: {
    outDir: 'dist',
  },
})