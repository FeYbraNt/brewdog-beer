import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Buefy UI library
import Buetify from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
