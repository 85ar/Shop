export default {
  PRODUCTS(state) {
    return state.products;
  },
  FILTERED_PRODUCTS_BY_CATEGORY(state, getters, rootState) {
    // Получаем текущую выбранную категорию из состояния корневого хранилища
    const selectedCategory = rootState.categories.selectedCategory;
    // Получаем список всех продуктов из состояния модуля 'products'
    const allProducts = state.products;

    if (selectedCategory === "All" || selectedCategory === null) {
      return {
        products: allProducts.slice(0, state.visibleProductsCount), // Возвращаем видимое количество продуктов
        total: allProducts.length, // Возвращаем общее количество продуктов без учета видимости
      };
    } else {
      // Если выбрана конкретная категория, фильтруем продукты по этой категории
      const filteredProducts = allProducts.filter(
        (product) => product.category === selectedCategory,
      );
      return {
        products: filteredProducts.slice(0, state.visibleProductsCount), // Возвращаем видимое количество отфильтрованных продуктов
        total: filteredProducts.length, // Возвращаем общее количество отфильтрованных продуктов без учета видимости
      };
    }
  },
};
