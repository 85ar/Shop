export default {
  PRODUCTS(state) {
    return state.products;
  },
  FILTERED_PRODUCTS_BY_CATEGORY(state, getters, rootState) {
    const selectedCategory = rootState.categories.selectedCategory;
    if (selectedCategory === "All" || selectedCategory === null) {
      return state.products;
    } else {
      return state.products.filter(
        (product) => product.category === selectedCategory,
      );
    }
  },
};
