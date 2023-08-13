import axios from "axios";

import config from "../../config/config";
import { createStore } from "vuex";

export default createStore({
  state: () => ({
    categories: [],
    products: [],
  }),

  mutations: {
    SET_CATEGORIES_TO_STATE(state, categories) {
      state.categories = categories;
    },
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
  },

  actions: {
    async GET_CATEGORIES_FROM_API({ commit }) {
      try {
        const categories = await axios.get(`${config.api}/categories`);
        commit("SET_CATEGORIES_TO_STATE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const products = await axios.get(config.api);
        commit("SET_PRODUCTS_TO_STATE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    CATEGORIES(state) {
      return state.categories;
    },
    PRODUCTS(state) {
      return state.products;
    },

    // filteredProducts(state) {
    //   if (state.selectedCategory) {
    //     return state.products.filter(
    //       (product) => product.category === state.selectedCategory,
    //     );
    //   }
    //   return state.products;
    // },
  },
});
