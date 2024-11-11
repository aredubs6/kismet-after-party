import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/aredubs6/kismet-after-party.git', // Replace with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
