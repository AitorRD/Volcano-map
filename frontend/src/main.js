import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './components/LoginComponent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LoginComponent },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')