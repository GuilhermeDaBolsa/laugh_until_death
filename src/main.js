import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
	baseURL: "https://backendUrl:backendPort",
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')