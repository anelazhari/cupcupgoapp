import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import VueSession from 'vue-session'
Vue.use(VueSession)

import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
