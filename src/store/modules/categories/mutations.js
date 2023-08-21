export default {
  SET_CATEGORIES_TO_STATE(state, categories) {
    state.categories = categories;
  },
  SET_SELECTED_CATEGORY_TO_STATE(state, category) {
    state.selectedCategory = category;
  },
  SET_CATEGORIES_LOADING(state, isLoading) {
    state.categoriesLoading = isLoading;
  },
};
