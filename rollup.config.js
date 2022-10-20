import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: './src/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      dir: './dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      globals,
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
      globals,
    },
  ],
  plugins: [
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: './dist',
    }),
    terser(),
  ],
};

export default config;
