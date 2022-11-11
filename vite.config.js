import dsv from '@rollup/plugin-dsv'
import fs from "vite-plugin-fs";

export default {
    plugins: [
        dsv(),
        fs(),
    ],
    server: {
        host: '0.0.0.0',
    }
}