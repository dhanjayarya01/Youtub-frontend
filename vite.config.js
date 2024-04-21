import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://youtub-frontend-eo4e.vercel.app'
    }
  },
  plugins: [react()],
})
