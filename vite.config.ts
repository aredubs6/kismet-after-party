import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kismet-after-party/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});