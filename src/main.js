import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes.js'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
