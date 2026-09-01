import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const base = process.env.VITE_BASE || '/gym-log/'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      includeAssets: ['favicon.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'GymLog',
        short_name: 'GymLog',
        description: 'Трекер тренировок и питания',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        start_url: base,
        scope: base,
        lang: 'ru',
        icons: [
          {
            src: '/gym-log/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/gym-log/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/gym-log/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  base,
  server: {
    proxy: {
      // local: BASE=/gym-log/ → /gym-log/api/* ; сервер без APP_BASE слушает /api/*
      [`${base.replace(/\/$/, '')}/api`]: {
        target: 'http://127.0.0.1:8787',
        rewrite: (p) => p.replace(new RegExp(`^${base.replace(/\/$/, '')}`), ''),
      },
      '/api': 'http://127.0.0.1:8787',
    },
  },
})
