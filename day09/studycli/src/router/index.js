import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入首页路径
import HomeView from '../views/HomeView.vue'
// 将vue路由挂载到vue原型上
Vue.use(VueRouter)
// 路由配置
const routes = [
  {
    path: '/',
    name: 'home',
    // 路由元信息的设置
    meta: {
      title: "首页"
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: "关于"
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: "我的"
    },
    component: () => import('../views/MyView.vue')
  }
]
// 创建vue路由对象
const router = new VueRouter({
  routes
})
// 暴露出路由
export default router
