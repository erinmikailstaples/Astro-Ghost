import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: '../ghost-erin-mikail/content/themes/erin-mikail-theme',
  build: {
    format: 'file',
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name]'
        }
      }
    }
  }
});