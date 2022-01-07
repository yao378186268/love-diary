import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Login = () => import('../views/login/Login.vue'); // 登录页面
const Layout = () => import('@/views/layout/Index.vue');

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
    name: 'Layout',
    component: Layout
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
