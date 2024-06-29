import { RollupOptions } from "rollup";
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const bundle: RollupOptions = {
    input: 'src/hw2.ts',
    output: { file: 'dist/bundle.js' },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
        commonjs(),
        terser()
    ],
}
export default bundle