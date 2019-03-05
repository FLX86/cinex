import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// importing bootswatch styles
import 'bootswatch/dist/darkly/bootstrap.css'

// omd api key 617aa2ba


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
