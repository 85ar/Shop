<template>
  <div class="products">
    <div class="first">
      <p class="selectedCategory">{{ selectedCategory }}</p>
    </div>
    <div class="loader" v-if="productsLoading"><LoaderProducts /></div>

    <div v-else class="cards">
      <Card
        v-for="product in filteredProducts"
        :product="product"
        :key="product.id"
      />
    </div>
    <div v-if="filteredProducts.length === 0">No products in this category</div>
    <button v-if="showLoadMoreButton" @click="loadMore">See more</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Card from "./Card.vue";
import LoaderProducts from "./LoaderProducts.vue";
export default {
  props: ["products"],
  components: { Card, LoaderProducts },
  computed: {
    ...mapGetters("products", ["FILTERED_PRODUCTS_BY_CATEGORY"]),
    ...mapState("categories", ["selectedCategory"]),
    ...mapState("products", ["productsLoading"]),
    filteredProducts() {
      return this.FILTERED_PRODUCTS_BY_CATEGORY.products;
    },
    showLoadMoreButton() {
      const filteredProductsInfo = this.FILTERED_PRODUCTS_BY_CATEGORY;
      return filteredProductsInfo.total > this.filteredProducts.length;
    },
  },
  methods: {
    ...mapActions("products", ["GET_PRODUCTS_FROM_API", "LOAD_MORE_PRODUCTS"]),

    loadMore() {
      const filteredProductsInfo = this.FILTERED_PRODUCTS_BY_CATEGORY;
      if (this.filteredProducts.length < filteredProductsInfo.total) {
        this.LOAD_MORE_PRODUCTS();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding-left: 41px;
  border-left: 1px solid $additional;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.first {
  margin-bottom: 20px;
}
.selectedCategory {
  color: $accent;
  font-family: Roboto;
  font-size: 22px;
}
.selectedCategory::first-letter {
  text-transform: uppercase;
}
.loader {
  position: absolute;
  top: 40%;
  left: 53%;
}
</style>
