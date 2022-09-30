import typescript from '@rollup/plugin-typescript';
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
  ],
};

export default config;
