import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/list'
    },{
        path: '/users',
        name: 'users',
        component: ()=>import(/* webpackChunkName: "Navbar" */ '@/modules/Usuarios/layouts/UsuarioLayout.vue'),
        children: [
            { 
                path: 'list', 
                name: 'user-list',
                component: ()=>import(/* webpackChunkName: "ListUserPage" */ '@/modules/Usuarios/pages/ListUserPage.vue')
            },{ 
                path: 'edit',
                name: 'user-edit', 
                component: ()=>import(/* webpackChunkName: "AboutPage" */ '@/modules/Usuarios/pages/EditUserPage.vue')
            },{
                path: '',
                name: 'users',
                redirect: { name: 'user-list'}
            }
        ]

    },{ 
        path: '/:pathMatch(.*)*', 
        component: ()=>import(/* webpackChunkName: "NoFountPage" */ '@/modules/shared/pages/NoFountPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

export default router