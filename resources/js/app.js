require('./bootstrap');

import Vue from 'vue';
import router from './routes';
import store from './store/index';
import vuetify from './vuetify';

const app = new Vue({
    vuetify,
    el: '#app',
    store,
    router,
});
