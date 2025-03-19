import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import flights from "../views/FlightsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/flights", name: "flights", component: flights },
  ],
});

export default router;
