import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'tailwind/index.ts',
    'tailwind/index': 'tailwind/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  outDir: 'dist',
});
