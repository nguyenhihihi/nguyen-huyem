import './firebase';
import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import VueRouter from 'vue-router';

import Login from './components/login.vue';
import TaiXe from './components/taixe.vue';

Vue.use(VueFire);

Vue.config.productionTip = false;

var routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    {
        path:'/taixe', component: TaiXe,
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
            next('login');
        }
    } else {
        next();
    }
});