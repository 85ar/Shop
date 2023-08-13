<template>
  <div>
    <!-- <h1>{{ selectedCategory }}</h1>
    <div>
      <router-link v-for="category in categories" :key="category"
        :to="{ path: `/category/${category}`, query: { allCategories: categories.join(',') } }"
        :class="{ 'selected': category === selectedCategory }">
        {{ category }}
      </router-link>
    </div>
    <div v-for="product in filteredProducts" :key="product.id" class="product-card">

    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  // computed: {
  //   ...mapState(['categories']), // Используйте категории из хранилища
  //   // ...
  // },
  data() {
    return {
      // selectedCategory: '',
      // products: []
    };
  },
  // async created() {
  //   this.selectedCategory = this.$route.params.categoryId;
  //   await this.fetchCategoryProducts(this.selectedCategory);
  // },
  computed: {
    // filteredProducts() {
    //   return this.products.filter(product => product.category === this.selectedCategory);
    // }
  },
  methods: {
    // async fetchCategoryProducts(categoryId) {
    //   try {
    //     const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`);
    //     this.products = response.data;
    //   } catch (error) {
    //     console.error('Error fetching category products:', error);
    //   }
    // }
  }
};
</script>

<style scoped>
/* Add your styles here */
.selected {
  font-weight: bold;
}
</style>
