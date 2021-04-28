import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import Boot from './components/Boot';

window.Vue = Vue;

Vue.use(VueRouter);
Vue.component('boot', Boot);

Vue.config.devtools = true;

window.Vue = require('vue');
window.EventBus = new Vue();
window.Event = new Vue();

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// 120 seconds
window.axios.defaults.timeout = 120 * 1000;

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};


window.WindowEvent = window.Event;
// Global Event Service
window.EventBus = new Vue();

// Global Flash Message Service
window.Flash = function (vm, message, seconds, type) {
    EventBus.$emit('flash', [vm, message, seconds, type]);
};