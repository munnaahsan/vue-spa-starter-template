import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// define all route's components
const Index = require('./router-views/Index.vue').default;
const About = require('./router-views/About.vue').default;

// define routes
const routes = [
    { path: '/', name: 'index', component: Index },
    { path: '/about', name: 'about', component: About }
];

// Initiate vue router instance
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;


