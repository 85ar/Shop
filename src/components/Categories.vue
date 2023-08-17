<template>
  <div class="categories">
    <div class="title">Catalog</div>
    <div class="list">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["categories"],
  computed: {
    ...mapState(["selectedCategory"]),
  },
  methods: {
    pushCategory(category) {
      this.$store.dispatch("SELECT_CATEGORY", category);
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
  color: red;
}
</style>
