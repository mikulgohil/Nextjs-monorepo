import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'fsevents'],
  target: 'es2020',
  minify: true,
  treeshake: true,
  platform: 'browser'
}) 