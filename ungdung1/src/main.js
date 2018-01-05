import './firebase';
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'

import VueRouter from 'vue-router';

import BookingHistory from './components/BookingHistory.vue';
import BookingInfo from './components/BookingInfo.vue';
import Login from './components/Login.vue';
import Search from './components/Search.vue';

Vue.use(VueFire);
 
Vue.config.productionTip = false;

// var routes = [
//   { path: '/', component: Login },
//   { path: '/BookingHistory/:sdt', 
//   	component: BookingHistory
//   	requiresAuth: true
//    },
// ];

// Vue.use(VueRouter);

// var router = new VueRouter({
//   routes
// });


new Vue({
  el: '#app',
  render: h => h(App)
});


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.access_token && localStorage.access_token === '1234567890') {
//       next();
//     } else {
//       next('login');
//     }
//   } else {
//     next();
//   }
// });