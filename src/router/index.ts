import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Login = () => import("../views/page/Login.vue");

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
