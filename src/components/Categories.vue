<template>
  <aside class="categories">
    <div class="title">Catalog</div>
    <div class="loader" v-if="categoriesLoading">
      <LoaderCategories />
    </div>
    <div v-else class="list">
      <router-link
        class="link"
        v-for="category in categories"
        :key="category"
        :to="{ path: `/category/${category}` }"
        @click="pushCategory(category)"
        :class="{ selected: category === this.selectedCategory }"
      >
        {{ category }}
      </router-link>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import LoaderCategories from "./loadercategories.vue";

export default {
  components: {
    LoaderCategories,
  },
  props: ["categories"],
  computed: {
    ...mapState("categories", ["selectedCategory", "categoriesLoading"]),
  },
  methods: {
    pushCategory(category) {
      this.$store.dispatch("categories/SELECT_CATEGORY", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  min-width: 179px;
}

.title {
  color: $secondary;
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 25px;
}

.list {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.link {
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 8px;
  color: $secondary;
}
.link:hover {
  color: $third;
}
.link::first-letter {
  text-transform: uppercase;
}
.active {
  color: $accent;
}

.li {
  margin-bottom: 8px;
}

.link {
  font-family: Roboto;
  font-size: 16px;
  color: $secondary;
}

.selected {
  color: $accent;
}
.loader {
  position: absolute;
  top: 30%;
}
</style>
