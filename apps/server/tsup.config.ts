import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/index.ts'],
  clean: true,
  minify: !options.watch,
  sourcemap: true,
  format: ['esm'],
  ...options,
}));
