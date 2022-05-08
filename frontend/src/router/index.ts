// 1.Dependency
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// 2.Components
const Notebook = () => import("../views/Notebook.vue");

// 3.Routes
const routes = [
    { path: "/:type?", component: Notebook, name: 'home' },
];

// 4.Build An Instance
const router = createRouter({
    history: createWebHashHistory(), //hash
    // history: createWebHistory(),  //rewrite
    routes,
});

export default router;
