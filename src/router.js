import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Welcome from './components/Welcome.vue'
import Activities from './components/Activities.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Activities',
      name: 'Activities',
      component: Activities
    }
  ]
})
