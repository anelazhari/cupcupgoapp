import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import RegisterTag from '@/components/RegisterTag'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
        path: '/registertag',
        name: 'RegisterTag',
        component: RegisterTag
    }
  ]
})
