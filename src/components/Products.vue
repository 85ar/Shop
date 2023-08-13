<template>
  <div class="products">
    <div class="first">
      <p>All</p>
    </div>
    <div class="cards">
      <Card v-for="product in products" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  props: ['products'],
  components: { Card },
}

</script>

<style lang="scss" scoped>
.products {
  margin-left: 41px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.first {
  margin-bottom: 20px;
}
</style>