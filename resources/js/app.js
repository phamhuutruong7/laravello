import './bootstrap';
import Vue from 'vue';
import Board from './Board';
import apolloProvider from './components/apollo.config';

window.Vue = Vue;

Vue.component('Board', require('./Board.vue').default);

const app = new Vue({
    el: '#app',
    apolloProvider
});
