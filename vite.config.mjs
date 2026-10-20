import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', 'gsap/CustomEase', '@gsap/react'],
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'badrulamin.com',
      'www.badrulamin.com',
      'vm-host-portfolio',
      'myportfolio.local',
    ],
  },

  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'badrulamin.com',
      'www.badrulamin.com',
      'vm-host-portfolio',
      'myportfolio.local',
    ],
  },

  build: {
    outDir: 'build',
  },
});
