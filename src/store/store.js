import axios from "axios";
import config from "../../config/config";
import { createStore } from "vuex";

export default createStore({
  state: () => ({
    categories: [],
    products: [],
    selectedCategory: null,
  }),

  mutations: {
    SET_CATEGORIES_TO_STATE(state, categories) {
      state.categories = categories;
    },
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    SET_SELECTED_CATEGORY_TO_STATE(state, category) {
      state.selectedCategory = category;
    },
  },

  actions: {
    async GET_CATEGORIES_FROM_API({ commit }) {
      try {
        const response = await axios.get(`${config.api}/categories`);
        const data = response.data;
        data.unshift("All");
        commit("SET_CATEGORIES_TO_STATE", data);
      } catch (error) {
        console.log(error);
      }
    },
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const response = await axios.get(config.api);
        commit("SET_PRODUCTS_TO_STATE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    SELECT_CATEGORY({ commit }, category) {
      commit("SET_SELECTED_CATEGORY_TO_STATE", category);
    },
  },

  getters: {
    CATEGORIES(state) {
      return state.categories;
    },
    PRODUCTS(state) {
      return state.products;
    },
    FILTERED_PRODUCTS_BY_CATEGORY(state) {
      console.log("state", state);
      if (state.selectedCategory === "All" || state.selectedCategory === null) {
        return state.products;
      } else {
        return state.products.filter(
          (product) => product.category === state.selectedCategory,
        );
      }
      return state.products;
    },
  },
});
