import Vue from 'vue'
import VueRouter from 'vue-router'
import Administer from '../views/Administer'


Vue.use(VueRouter)

const routes = [

    {
        path: '/Administer',
        name: 'Administer',
        component: Administer
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router