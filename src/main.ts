import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'element-plus/dist/index.css'; // 引入element-plus样式

import './style/common.scss';
const app = createApp(App); // 实例化vue

app.use(store); // 使用store
app.use(router); // 使用router

app.mount('#app');
