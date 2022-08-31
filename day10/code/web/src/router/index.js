import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "客户信息管理系统"
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: "登录"
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/add',
    name: 'Add',
    meta: {
      title: "添加客户信息"
    },
    component: () => import('../views/Add')
  },
  {
    path: '/edit',
    name: 'Edit',
    meta: {
      title: "修改客户信息"
    },
    component: () => import('../views/Edit')
  }

]

const router = new VueRouter({
  routes
})

export default router
