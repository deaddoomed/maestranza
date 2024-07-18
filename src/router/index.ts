import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import main from "@/views/main-view.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: main,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
