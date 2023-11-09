<template>
  <div class="products">
    <div class="first">
      <div class="selectedCategory">{{ selectedCategory }}</div>
      <div class="blocks">
        <div class="searchBlock">
          <input
            type="text"
            v-model="searchProduct"
            class="inputSearch"
            placeholder="Enter product name ..."
          />
          <div class="btnSearch">
            <SearchProductIcon />
          </div>
        </div>
        <div>
          <label for="selectOption"></label>
          <select class="sortBlock" v-model="selectedOption">
            <option value="descending" class="sortItem">descending</option>
            <option value="ascending " class="sortItem">ascending</option>
          </select>
        </div>
      </div>
    </div>
    <div class="loader" v-if="productsLoading"><LoaderProducts /></div>

    <div v-else class="cards">
      <Card
        v-for="product in filteredProducts"
        :product="product"
        :key="product.id"
        @click="cardClick(product)"
      />
    </div>
    <div v-if="filteredProducts.length === 0">No products in this category</div>
    <div class="loadMoreBlock">
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
import SearchProductIcon from "@/assets/SearchProduct.vue";
export default {
  data() {
    return {
      showScrollButton: false,
      searchProduct: "",
      selectedOption: null,
    };
  },
  props: ["products"],
  components: { Card, LoaderProducts, UpIcon, SearchProductIcon },
  computed: {
    ...mapGetters("products", ["FILTERED_PRODUCTS_BY_CATEGORY"]),
    ...mapState("categories", ["selectedCategory"]),
    ...mapState("products", ["productsLoading"]),
    filteredProducts() {
      if (this.searchProduct.length !== 0) {
        let newArr = this.filteredProducts.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(this.searchProduct.toLowerCase());
        });
        return newArr;
      } else return this.FILTERED_PRODUCTS_BY_CATEGORY.products;
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
    cardClick(obj) {
      console.log('product', obj.id);
      this.$router.push('cardInfo', obj.id)
    }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.loadMoreBlock {
  display: flex;
  margin-left: 20px;
}
.scroll {
  position: absolute;
  right: 0;
  bottom: -18px;
}
.searchBlock {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid $additional;
  margin-right: 20px;
}
.inputSearch {
  opacity: 0.6;
  color: $secondary;
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
  width: 520px;
  height: 28px;
  padding: 7px 10px;
  outline: none;
}
.btnSearch {
  display: flex;
  padding: 6px 10px;
}
.blocks {
  display: flex;
  align-items: center;
}
.sortBlock {
  border-radius: 8px;
  border: 1px solid $additional;
  width: 250px;
  height: 28px;
  color: rgba(51, 51, 51, 0.6);
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
  opacity: 0.6;
  padding: 10px 7px;
}
</style>
