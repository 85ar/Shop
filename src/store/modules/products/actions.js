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
  async LOAD_MORE_PRODUCTS({ commit, state, getters }) {
    commit("SET_PRODUCTS_LOADING", true);

    const startIndex = state.visibleProductsCount;
    const endIndex = startIndex + 4;

    // Получаем информацию о отфильтрованных товарах
    const filteredProductsInfo = getters.FILTERED_PRODUCTS_BY_CATEGORY;

    if (endIndex <= filteredProductsInfo.total) {
      // Если есть еще товары для загрузки
      const moreProducts = filteredProductsInfo.products.slice(
        startIndex,
        endIndex,
      );
      // Добавляем загруженные товары в состояние
      commit("SET_PRODUCTS_TO_STATE", [...state.products, ...moreProducts]);
      // Увеличиваем счетчик видимых товаров
      commit("SET_VISIBLE_PRODUCTS_COUNT", endIndex);
      commit("SET_PRODUCTS_LOADING", false);
    } else if (startIndex < filteredProductsInfo.total) {
      // Если остались нераспределенные товары, но их меньше чем 4
      const remainingProducts = filteredProductsInfo.products.slice(startIndex);
      // Добавляем оставшиеся товары в состояние
      commit("SET_PRODUCTS_TO_STATE", [
        ...state.products,
        ...remainingProducts,
      ]);
      // Устанавливаем счетчик видимых товаров равным общему количеству
      commit("SET_VISIBLE_PRODUCTS_COUNT", filteredProductsInfo.total);
      commit("SET_PRODUCTS_LOADING", false);
    } else {
      // Если больше товаров нет для загрузки
      commit("SET_PRODUCTS_LOADING", false);
    }
  },
  RESET_VISIBLE_PRODUCTS_COUNT({ commit }) {
    commit("RESET_VISIBLE_PRODUCTS_COUNT");
  },
  SET_PRICE_PRODUCT({ commit }, payload) {
    commit("SET_PRICE_PRODUCT_TO_STATE", payload);
  },
  SET_COUNT_PRODUCT({ commit }, payload) {
    commit("SET_COUNT_PRODUCTS_TO_STATE", payload);
  },
};
