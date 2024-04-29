import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';
//added
export default defineConfig({
  server: {
    proxy: isProduction ? {
      '/api': 'https://backendproject-sd57.onrender.com'
    } : {
      '/api': 'http://localhost:3000'
    }
  
  },

  plugins: [react()],
});
