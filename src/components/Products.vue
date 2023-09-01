<template>
  <div class="products">
    <div class="first">
      <div class="selectedCategory">{{ selectedCategory }}</div>
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
    <div class="block">
      <button v-if="showLoadMoreButton" @click="loadMore" class="btn">
        See more
      </button>
    </div>
    <button class="scroll" @click="scrollToTop" v-if="showScrollButton">
      <UpIcon />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Card from "./Card.vue";
import LoaderProducts from "./LoaderProducts.vue";
import UpIcon from "@/assets/Up.vue";
export default {
  data() {
    return {
      showScrollButton: false,
    };
  },
  props: ["products"],
  components: { Card, LoaderProducts, UpIcon },
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

    scrollToTop() {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: "smooth",
      });
    },

    handleScroll() {
      this.showScrollButton = window.scrollY > 600;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding-left: 20px;
  border-left: 1px solid $additional;
  width: 100%;
  position: relative;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.first {
  margin-bottom: 20px;
  margin-left: 20px;
}
.selectedCategory {
  color: $accent;
  font-family: Roboto;
  font-size: 22px;
  border-bottom: 1px solid $accent;
  display: inline-block;
}
.selectedCategory::first-letter {
  text-transform: uppercase;
}
.loader {
  position: absolute;
  top: 40%;
  left: 53%;
}
.btn {
  border-radius: 8px;
  border: 1px solid $additional;
  color: $accent;
  font-family: Roboto;
  font-size: 14px;
  padding: 6px 28px;
  display: flex;
  margin: auto;
}
.btn:hover {
  color: $third;
}
.block {
  display: flex;
  margin-left: 20px;
}
.scroll {
  position: absolute;
  right: 0;
  bottom: -18px;
}
</style>
