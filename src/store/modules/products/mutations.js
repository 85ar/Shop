export default {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
  },
  SET_PRODUCTS_LOADING(state, isLoading) {
    state.productsLoading = isLoading;
  },
  SET_VISIBLE_PRODUCTS_COUNT(state, count) {
    state.visibleProductsCount = count;
  },
  RESET_VISIBLE_PRODUCTS_COUNT(state) {
    state.visibleProductsCount = 8;
  },
};
