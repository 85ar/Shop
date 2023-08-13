<template>
  <div class="card">
    <img class="img" :src='product.image' alt="">
    <span class="title">{{ product.title }}</span>
    <div>
      {{ product.rating.rate }}
    </div>
    <div>
      {{ product.price }}
    </div>
    <div>
      <button>Add to card</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']

}
</script>

<style lang="scss" scoped>
.card {
  width: 250px;
  height: 340px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background: $primary;
}

.img {
  max-height: 170px;
  max-width: 183px;
  display: block;
}

.title {
  color: $secondary;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
}
</style>