import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// 120 seconds
window.axios.defaults.timeout = 120 * 1000
axios.defaults.headers.common = {
    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
    'X-Requested-With': 'XMLHttpRequest',
}

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
