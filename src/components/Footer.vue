<template>
  <div>
      <h1>{{ categoryName }}</h1>
      <div v-for="product in products" :key="product.id" class="product-card">
        <!-- Display product details -->
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categoryName: '',
      products: []
    };
  },
  async created() {
    const categoryId = this.$route.params.categoryId;
    await this.fetchCategoryName(categoryId);
    await this.fetchCategoryProducts(categoryId);
  },
  methods: {
    async fetchCategoryName(categoryId) {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/categories/${categoryId}`);
        this.categoryName = response.data;
      } catch (error) {
        console.error('Error fetching category name:', error);
      }
    },
    async fetchCategoryProducts(categoryId) {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
