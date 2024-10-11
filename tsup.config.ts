import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', '!src/**/*.spec.*' , '!src/**/*.test.*'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  platform: 'node',
  splitting: true,
  sourcemap: true,
  minify: false,
  external: ['typescript', 'vitest'],

});
