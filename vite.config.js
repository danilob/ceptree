import dsv from '@rollup/plugin-dsv'

export default {
    plugins: [
        dsv(),
    ],
    server: {
        host: '0.0.0.0',
    }
}