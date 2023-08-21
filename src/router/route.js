import { createRouter, createWebHistory } from "vue-router";
import store from "./../store/index";
import About from "@/pages/About.vue";
import Contacts from "@/pages/Contacts.vue";
import Main from "@/pages/Main.vue";
import Favorite from "@/pages/Favorite.vue";

const routes = [
  {
    path: "/",
    component: Main,
    name: "main",
    beforeEnter(to, from, next) {
      store.dispatch("categories/SELECT_CATEGORY", "All");
      next();
    },
  },
  { path: "/category/:categoryId", component: Main, name: "category" },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/contacts",
    component: Contacts,
    name: "contacts",
  },
  {
    path: "/favorite",
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
