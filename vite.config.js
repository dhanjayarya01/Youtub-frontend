import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//added
export default defineConfig({
  server: {
    proxy: {
      // '/api': 'https://backendproject-sd57.onrender.com'
      '/api': 'http://localhost:3000'
    } 
  
  },

  plugins: [react()],
});
