// @ts-ignore
import type { RouterConfig } from 'umi';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export async function getInitialState() {
    const initialData = await fetchInitialData();
    return initialData;
}


export function onRouterCreated({ router }: any) {
    console.debug('onRouterCreated', router);
}

export function onAppCreated({ app }: any) {
    app.use(ElementPlus)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    console.debug('onAppCreated', app);
}

export function onMounted({ app, router }: any) {
    console.debug('onMounted', app, router);
    // @ts-ignore
    router.beforeEach((to, from, next) => {
        console.debug('router beforeEach', to, from);
        next();
    });
}

export const router: RouterConfig = {
    linkExactActiveClass: 'is-active',
    // @ts-ignore
    scrollBehavior(to, from) {
        console.debug('scrollBehavior', to, from);
    },
};
