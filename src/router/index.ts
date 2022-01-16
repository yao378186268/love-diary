import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Login = () => import('@/views/login/Login.vue'); // 登录页面
const Layout = () => import('@/views/layout/Index.vue');

import { yccAndZwt } from './yccAndZwt';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: '首页',
    component: Layout
  },
  // yccAndZwt
  {
    path: '/',
    name: 'yccAndZwt',
    component: Layout,
    children: [...yccAndZwt]
  }
];

console.log(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
