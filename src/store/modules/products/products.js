import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    products: [],
    productsLoading: false,
    price: null,
    count: 0,
  }),

  mutations: mutations,
  actions: actions,
  getters: getters,
};
