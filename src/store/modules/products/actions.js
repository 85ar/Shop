import axios from "axios";
import config from "../../../../config/config";

export default {
  async GET_PRODUCTS_FROM_API({ commit }) {
    try {
      commit("SET_PRODUCTS_LOADING", true);
      const response = await axios.get(config.api);
      commit("SET_PRODUCTS_TO_STATE", response.data);
      commit("SET_PRODUCTS_LOADING", false);
    } catch (error) {
      console.log(error);
      commit("SET_PRODUCTS_LOADING", false);
    }
  },
};
