import { createRouter, createWebHistory } from "vue-router";
import store from "./../store/index";
import About from "@/pages/About.vue";
import Contacts from "@/pages/Contacts.vue";
import Main from "@/pages/Main.vue";
import Favorite from "@/pages/Favorite.vue";
import CardInfo from "@/components/CardInfo.vue";

const routes = [
  {
    path: "/",
    component: Main,
    name: "main",
    beforeEnter(to, from, next) {
      store.dispatch("categories/SELECT_CATEGORY", "All");
      store.dispatch("products/RESET_VISIBLE_PRODUCTS_COUNT");
      next();
    },
  },
  { path: "/category/:categoryId", component: Main, name: "category" },
  { path: "/cards/:cardId", component: CardInfo, name: "cardInfo" },
  {
    path: "/about",
    component: About,
    name: "about",
    meta: { activeClass: "active" },
  },
  {
    path: "/contacts",
    component: Contacts,
    name: "contacts",
    meta: { activeClass: "active" },
  },
  {
    path: "/favorite",
    component: Favorite,
    name: "favorite",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
