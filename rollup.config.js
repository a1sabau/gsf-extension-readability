import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/ts/Readability.ts',
  output: {
    file: 'dist/Readability.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    commonjs({ extensions: [ '.js', '.ts' ] }),
    resolve({
      browser: true,
      preferBuiltins: true,
      extensions: ['.js', '.json', '.ts', '.tsx'],
      jsnext: false,
    }),
  ],
};
