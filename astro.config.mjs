import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://erin-mikail-blog.pages.dev',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@tryghost/content-api']
          }
        }
      }
    }
  }
}); 