import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('motion')) return 'motion'
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('i18next')) return 'i18n'
          if (id.includes('react-router') || id.includes('react-icons')) return 'router'
          return 'vendor'
        },
      },
    },
  },
})
