import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from "../views/AppAbout.vue"
import AppMain from "../views/AppMain.vue"
import AppLogin from "../views/AppLogin.vue"
import top3 from "../views/top3.vue"
import AppCart from "../views/AppCart.vue"


const routes = [ 
    {
    path: '/',
    name: 'Home',
    component: AppMain
},
{
    path: '/about',
    name: 'Sobre',
    component: AppAbout
},
{
    path: '/Login',
    name: 'Login',
    component: AppLogin
},
{
    path: '/top3',
    name: 'top3',
    component: top3
},
{
    path: '/cart',
    name: 'Cart',
    component: AppCart
},
{
path: '/addCart/:id',
name: 'AddCart',
component: AppCart
},

]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
history: createWebHistory(base_url),
routes
})

export default router