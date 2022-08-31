import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入Vant组件及样式
import Vant from 'vant';
import 'vant/lib/index.css';
// 将Vant挂载在Vue上
Vue.use(Vant);

// 导入rem基准值设置js
import "amfe-flexible/index.js";

// 导入公共样式
import "./assets/css/common.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
