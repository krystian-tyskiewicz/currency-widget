import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';

function demoBuildPlugin(): Plugin {
  return {
    name: 'demo-build',
    closeBundle() {
      const src = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');
      const prod = src.replace(
        /<script type="module" src="\/src\/index\.ts"><\/script>/,
        '<script src="/currency-widget.js"></script>',
      );
      writeFileSync(resolve(__dirname, 'dist/index.html'), prod);
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), demoBuildPlugin()],
  server: {
    port: 3001,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode === 'development' ? 'development' : 'production'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CurrencyWidget',
      formats: ['iife'],
      fileName: () => 'currency-widget.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
  },
}));
