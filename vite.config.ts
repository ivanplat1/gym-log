import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site: https://ivanplat1.github.io/gym-log/
export default defineConfig({
  plugins: [react()],
  base: '/gym-log/',
})
