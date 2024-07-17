import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//added
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    } 
  
  },

  plugins: [react()],
});
