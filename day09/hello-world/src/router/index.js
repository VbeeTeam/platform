import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/cart",
    name: "Cart",
    // component: Cart
    component: () => import('../views/Cart')
  }
]

const router = new VueRouter({
  routes
})

export default router
