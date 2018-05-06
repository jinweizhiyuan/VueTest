import Vue from 'vue';
import app from './app.vue';

import './assets/styles/test.css';
import './assets/images/timg.jpg';
import './assets/styles/test-stylus.styl';

var root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: r => r(app)
}).$mount(root);