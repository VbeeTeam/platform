import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入第三方ele
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import './assets/css/style.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
