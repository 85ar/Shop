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
  SET_PRICE_PRODUCT_TO_STATE(state, price) {
    state.price = price;
  },
  SET_COUNT_PRODUCTS_TO_STATE(state, count) {
    state.count = count;
  },
};
