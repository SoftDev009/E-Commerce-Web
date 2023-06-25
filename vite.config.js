import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Shoptik",
        short_name: "Shoptik",
        description:
          "Find beautifully crafted furniture for your home at Shoptik.",
        categories: ["shopping"],
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/maskable_icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "https://res.cloudinary.com/die12ywpb/image/upload/v1687669492/screenshot4_wvbzla.png",
            sizes: "800x600",
            platform: "android",
            label:
              "Find beautifully crafted furniture for your home at Shoptik.",
          },
          {
            src: "https://res.cloudinary.com/die12ywpb/image/upload/v1687669422/screenshot2_se3fi3.png",
            sizes: "1200x800",
            platform: "android",
            label:
              "Find beautifully crafted furniture for your home at Shoptik.",
          },
          {
            src: "https://res.cloudinary.com/die12ywpb/image/upload/v1687669423/screenshot3_crmnwv.png",
            sizes: "800x600",
            platform: "android",
            label:
              "Find beautifully crafted furniture for your home at Shoptik.",
          },
        ],
        theme_color: "#171717",
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10, // Maximum 10 entries/files in the cache
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/.netlify")
            },
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 2 * 60 * 60, // 2 hours
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})
