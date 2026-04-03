import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,          // auto-open browser on npm run dev
  },
  build: {
    outDir: 'dist',
    sourcemap: false,    // disable sourcemaps in prod build for smaller bundle
    chunkSizeWarningLimit: 2000, // App.jsx is large — suppress warning
  },
})
