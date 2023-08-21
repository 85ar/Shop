import { createStore } from "vuex";
import categoriesModule from "./modules/categories/categories";
import productsModule from "./modules/products/products";

const store = createStore({
  modules: {
    categories: categoriesModule,
    products: productsModule,
  },
});

export default store;
