export default {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
  },
  SET_PRODUCTS_LOADING(state, isLoading) {
    state.productsLoading = isLoading;
  },
};
