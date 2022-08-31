import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "首页",
      requiresAuth: false
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: "关于",
      requiresAuth: true
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "登录",
      requiresAuth: false
    },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      title: "分类",
      requiresAuth: true
    },
    component: () => import('../views/CategoryView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: "详情",
      requiresAuth: true
    },
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: "购物车",
      requiresAuth: true
    },
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: "订单",
      requiresAuth: true
    },
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: "我的",
      requiresAuth: true
    },
    component: () => import('../views/MyView.vue')
  }
]

const router = new VueRouter({
  routes
})
// 路由拦截（路由守卫）
router.beforeEach((to, from, next) => {
  // 取出浏览器用户缓存信息
  var userInfo = localStorage.getItem("userInfo")
  // 判断是否存在用户信息
  if(userInfo || to.path == '/' || to.path == '/detail' || to.path == '/category'){
    next()
  }else{
    // 防止路由死循环
    if(to.path == '/login'){
      next()
      return
    }
    next({path: '/login'})
  }

})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
return originalPush.call(this, location).catch(err => err)
}

export default router
