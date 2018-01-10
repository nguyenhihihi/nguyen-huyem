import './firebase';
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router';

import BanDo from './components/BanDo.vue';
import Index from './components/Index.vue';
import BanDoHeThong from './components/BanDoHeThong.vue';

Vue.use(VueFire);
 
Vue.config.productionTip = false;

var routes = [
   	{ path: '/', component: Index},
 	{ path: '/bando/:key', component: BanDo },
 	{ path: '/bandohethong', component: BanDoHeThong },
];

Vue.use(VueRouter);

var router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

router.beforeEach((to, from, next) => {
  next();
});
