import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Force Vite to always use this port
    strictPort: true // Don't try another port — show error if 5173 is unavailable
  }
})
