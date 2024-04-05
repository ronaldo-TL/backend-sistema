import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/tools'
    },{
        path: '/tools',
        name: 'tools',
        component: ()=>import(/* webpackChunkName: "Tables" */ '@/views/Tables.vue'),
    },{ 
        path: '/:pathMatch(.*)*', 
        component: ()=>import(/* webpackChunkName: "NoFountPage" */ '@/modules/shared/pages/NoFountPage.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",

})

export default router