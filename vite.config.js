import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TungonDugi/",
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
