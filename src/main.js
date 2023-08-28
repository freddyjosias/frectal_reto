import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/icomoon/style.css'
import 'hamburgers/dist/hamburgers.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
