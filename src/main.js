import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://liufusong.top:8899/api/private/v1/'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App)
}).$mount('#app')
