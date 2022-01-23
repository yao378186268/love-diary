import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Login = () => import('@/views/login/Login.vue'); // 登录页面
const Layout = () => import('@/views/layout/Index.vue'); // 布局页面
const Home = () => import('@/views/layout/Home.vue');
const UserInfo = () => import('@/views/user/userInfo.vue'); // 个人信息
const Password = () => import('@/views/user/password.vue'); // 修改密码

import { yccAndZwt } from './yccandzwt';

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
  // yccAndZwt
  {
    path: '/',
    name: 'yccAndZwt',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '首页',
        component: Home
      },
      {
        path: 'userinfo',
        name: '个人信息',
        component: UserInfo
      },
      {
        path: 'password',
        name: '修改密码',
        component: Password
      },
      ...yccAndZwt
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
