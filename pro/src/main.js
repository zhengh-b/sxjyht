// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios
//1. 关于跨域  允许跨域携带cookie
axios.defaults.withCredentials = true;
//解决跨域用axios
//var axiosOne = axios.create({
//	baseURL:'http://localhost:3000'
//})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
