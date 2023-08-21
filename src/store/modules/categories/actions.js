import axios from "axios";
import config from "../../../../config/config.js";

export default {
  async GET_CATEGORIES_FROM_API({ commit }) {
    try {
      commit("SET_CATEGORIES_LOADING", true);
      const response = await axios.get(`${config.api}/categories`);
      const data = response.data;
      data.unshift("All");
      commit("SET_CATEGORIES_TO_STATE", data);
      commit("SET_CATEGORIES_LOADING", false);
    } catch (error) {
      console.log(error);
      commit("SET_CATEGORIES_LOADING", false);
    }
  },
  SELECT_CATEGORY({ commit }, category) {
    commit("SET_SELECTED_CATEGORY_TO_STATE", category);
  },
};
