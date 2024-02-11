export default {
    routes: [
        {path: '/', redirect: '/user/login'},
        {path: '/login', redirect: '/user/login'},
        {
            path: '/user/',
            component: '@/layouts/LoginLayout',
            // wrappers: [
            //     '@/wrappers/KeycloakProvider',
            // ],
            routes: [
                {path: 'login', component: './login/index'}
            ],
        },
    ]
}
