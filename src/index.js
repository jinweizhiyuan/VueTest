import Vue from 'vue';
import app from './app.vue';

import './assets/styles/global.styl';

var root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: r => r(app)
}).$mount(root);