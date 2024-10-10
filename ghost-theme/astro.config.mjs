import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: '../ghost-erin-mikail/content/themes/erin-mikail-theme',
  build: {
    format: 'directory',
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  }
});