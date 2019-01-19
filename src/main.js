import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import 'amfe-flexible'
// import './iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
