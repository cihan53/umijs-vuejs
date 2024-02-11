import {defineConfig} from "umi";
import routes from "./src/routes";

export default defineConfig({
    title: 'Vuejs panel',
    metas: [
        {name: 'keywords', content: 'Vuejs panel'},
        {name: 'description', content: 'Vuejs panel'},
    ],

    npmClient: 'yarn',
    presets: [require.resolve('@umijs/preset-vue')],
    polyfill: false,
    deadCode: {},
    crossorigin: {},
    headScripts: [`console.log('head script')`],
    routes: routes.routes,
    alias: {
        component: './src/components',
    },
    define: {
        "API_URL": "/api/v1",
    },
    plugins: [
        // '@umijs/plugins/dist/request',
        '@umijs/plugins/dist/initial-state',
        '@umijs/plugins/dist/access',
        '@umijs/plugins/dist/model'
    ],

    // @ts-ignore
    devtool: process.env.NODE_ENV === 'development' ? 'eval' : false
    // proxy: {
    //     '/api/v1': {
    //         'target': 'http://localhost:9008/',
    //         // 'target': `https://${process.env.SUBDOMAIN}.machinemonitor.io/machineMonitoring/`,
    //         changeOrigin: true,
    //         secure:true,
    //         logLevel: 'debug',
    //         logProvider: ( )=>console,
    //         // eslint-disable-next-line
    //         onProxyReq: function onProxyReq(proxyReq:any, req:any ) {
    //             // Log outbound request to remote target
    //             console.log('-->  ', req.method, req.path, '->',   proxyReq.path);
    //             // console.log(proxyReq)
    //             console.log("Req URL: " + req.originalUrl);
    //             // console.log("Response status code: " + proxyReq.statusCode);
    //
    //         },
    //         onError: function onError(err:any, req:any, res:any) {
    //             console.error(err);
    //             res.status(500);
    //             res.json({error: 'Error when connecting to remote server.'});
    //         },
    //         // 'pathRewrite': { '^/ui' : '' },
    //     },
    // }
});
