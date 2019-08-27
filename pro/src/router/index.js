import Vue from 'vue'
import Router from 'vue-router'
import headers from '@/components/headers'
import Index from '@/components/index'
import login from '@/components/login'
import fcAlert from '@/components/fcAlert'
import admin from '@/components/users'
import user from '@/components/xueyuan'
//import fchead from '@/components/fchead'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/fcAlert',
      name: 'fcAlert',
      component: fcAlert
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
