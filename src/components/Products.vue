<template>
  <div class="products">
    <div class="first">
      <p class="selectedCategory">{{ selectedCategory }}</p>
    </div>
       <div class="loader" v-if="productsLoading"><LoaderProducts /></div>
    <div v-else class="cards">
      <Card v-for="product in FILTERED_PRODUCTS_BY_CATEGORY" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Card from './Card.vue';
import LoaderProducts from './LoaderProducts.vue';
export default {
  props: ['products'],
  components: { Card, LoaderProducts },
  computed: {
    ...mapGetters('products', ['FILTERED_PRODUCTS_BY_CATEGORY']),
    ...mapState('categories', ['selectedCategory']),
    ...mapState('products', ['productsLoading'])
  }
}

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
  // max-height: 1060px;
  // overflow-y: auto;
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