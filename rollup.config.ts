//import { RollupOptions } from "rollup";
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
    input: 'hw2/hw2.ts',
    output: { file: 'dist/hw2.js' },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
    ],
}
// export default bundle