<template>
  <div class="categories">
    <div class="title">Catalog</div>
    <div class="list">
      <router-link :class="{ 'selected': category === selectedCategory }" :to="{ name: 'main' }">
        All
      </router-link>
      <router-link :class="{ 'selected': category === selectedCategory }" v-for="category in categories" :key="category"
        :to="{ path: `/category/${category}` }">
        {{ category }}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: ['categories'],
  data() {
    return {
      newData: []
    }
  },
}
</script>

<style lang="scss" scoped>
.categories {
  border-right: 1px solid $additional;
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