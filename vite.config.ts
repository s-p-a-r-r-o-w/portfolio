import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['s-p-a-r-r-o-w.github.io'],
  },
})