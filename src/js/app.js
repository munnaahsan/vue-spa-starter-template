require('./bootstrap');

window.Vue = require('vue');

// Register Global Components
Vue.component('page-header', require('./components/PageHeader.vue').default);
Vue.component('page-footer', require('./components/PageFooter.vue').default);

//Import Vue Router Instance
import router from './router';

const app = new Vue({
    el: "#app",
    router
});
