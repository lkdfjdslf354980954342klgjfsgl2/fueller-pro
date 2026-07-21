import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fueller-pro/'  // <-- CAMBIA ESTO. Debe ser el nombre del repo
})
