import { routes } from './config/snowpack.router.js'

export default {
    mount: {
        public: { url: '/', static: true, resolve: false },
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-sass'
    ],
    routes: [
        ...routes.client(),
        ...routes.server()
    ],
    devOptions: { port: 3000 },
    optimize: {},
    packageOptions: {},
    buildOptions: {},
}

