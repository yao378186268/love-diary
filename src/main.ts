import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./style/common.scss";
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const app = createApp(App); // 实例化vue

app.use(ElementPlus); // 使用element-plus
app.use(store); // 使用store
app.use(router); // 使用router

app.mount("#app");
