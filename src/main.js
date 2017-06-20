import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes.js'
import store from './store/store.js'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
