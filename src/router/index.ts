import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { isUserAuthenticated } from '../utils/auth'

const routes : Array<RouteRecordRaw> = [
    { path: '/',      name: 'Home',  component: () => import('../pages/Home.vue')  },
    { path: '/login', name: 'Login', component: () => import('../pages/Login.vue') },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach(async (to, from) => {
    if (!isUserAuthenticated() && to.name !== 'Login')
        return { name: 'Login' }
})

export default router
