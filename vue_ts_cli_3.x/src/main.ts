import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
// import axios from 'axios'
// import qs from 'qs'
//
// Vue.prototype.axios = axios
// Vue.prototype.qs = qs
import './registerServiceWorker'

import { log } from '@/api/instance'

Vue.prototype.log = log

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
