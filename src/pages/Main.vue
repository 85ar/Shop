<template>
  <div class="main">
    <aside><Categories :categories="CATEGORIES" /></aside>
    <div><Products :products="PRODUCTS" /></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Categories from "@/components/Categories.vue";
import Products from "@/components/Products.vue";

export default {
  components: {
    Categories,
    Products,
  },
  computed: {
    ...mapGetters('categories', ["CATEGORIES"]),
    ...mapGetters('products', ["PRODUCTS"]),
  },
  methods: {
    ...mapActions('categories', ["GET_CATEGORIES_FROM_API", "SELECT_CATEGORY"]),
    ...mapActions('products', ["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_CATEGORIES_FROM_API();
    this.GET_PRODUCTS_FROM_API();
    this.SELECT_CATEGORY('All');

  },

};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
