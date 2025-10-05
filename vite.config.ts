import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/izmir-wing-tsung/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
