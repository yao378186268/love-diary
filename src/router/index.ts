import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
