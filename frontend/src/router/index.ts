// 1.Dependency
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// 2.Components
const Home = () => import("../views/Home.vue");

// 3.Routes
const routes = [{ path: "/", component: Home }];

// 4.Build An Instance
const router = createRouter({
    history: createWebHashHistory(), //hash
    // history: createWebHistory(),  //rewrite
    routes,
});

export default router;
