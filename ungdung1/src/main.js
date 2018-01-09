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



new Vue({
  el: '#app',
  render: h => h(App)
});
