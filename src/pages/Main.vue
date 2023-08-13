<template>
    <div class="main">
        <!-- <Categories :categories="categories" />
        <Products :products="products" /> -->


        <div class="categories">
            <router-link v-for="category in CATEGORIES" :key="category"
                :to="{ name: 'category', params: { categoryId: category } }"
                :class="{ 'selected': category === selectedCategory }" @click="selectCategory(category)">
                {{ category }}
            </router-link>
        </div>
        <div class="products">
            <h2>{{ selectedCategory || 'All Products' }}</h2>
            <div v-for="product in filteredProducts" :key="product.id" class="product-card">
                {{ products }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '@/../config/config.ts'

// import Categories from '../components/Categories.vue';
// import Products from '../components/Products.vue';
import { mapState } from 'vuex';
import { mapActions, mapGetters } from 'vuex';

export default {
    // components: {
    //     Categories, Products
    // },

    computed: {
        ...mapGetters(['CATEGORIES'])
    },
    methods: {
        ...mapActions(['GET_CATEGORIES_FROM_API']),

    },
    mounted() {
        this.GET_CATEGORIES_FROM_API;
    },
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
}
</style>