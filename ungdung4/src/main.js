import './firebase';
import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import VueRouter from 'vue-router';

import Login from './components/login.vue';
import TaiXe from './components/taixe.vue';
import DangKy from './components/register.vue';
import YeuCauChoXacNhan from './components/YeuCauChoXacNhan.vue';
import Depart from './components/Depart.vue';
import KetThucChuyenDi from './components/KetThucChuyenDi.vue';

Vue.use(VueFire);

Vue.config.productionTip = false;

var routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/register', component: DangKy},
    {
        path:'/taixe', component: TaiXe,
         meta: {
          requiresAuth: true
        }
    },
    {
        path:'/request', component: YeuCauChoXacNhan,
         meta: {
          requiresAuth: true
        }
    },
      {
        path:'/depart/:xe', component: Depart,
         meta: {
          requiresAuth: true
        }
    },
      {
        path:'/finish/:xe', component: KetThucChuyenDi,
         meta: {
          requiresAuth: true
        }
    }

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
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.access_token && localStorage.access_token === '1234567890') {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});