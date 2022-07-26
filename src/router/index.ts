import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { isUserAuthenticated } from '../utils/auth'

const routes : Array<RouteRecordRaw> = [
    { path: '/',      name: 'Home',     component: () => import('../pages/Home.vue')  },
    { path: '/login', name: 'Login',    component: () => import('../pages/Login.vue') },
    { path: '/new',   name: 'NewVoting',component: () => import('../pages/NewVoting.vue') },
    { path: '/voting/:uid/:id', name: 'Voting',   component: () => import('../pages/Voting.vue') }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach(async (to, from) => {
    if (!isUserAuthenticated() && to.name !== 'Login' && to.name !== 'Voting')
        return { name: 'Login' }
})

export default router
