/* eslint-disable */
import Vue from 'vue/dist/vue.js';
import Router from 'vue-router';
import Home from './pages/Home';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Home',
    name: 'Home',
    component: Home
  }]
});
