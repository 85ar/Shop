<template>
  <div class="card">
    <div class="imgBlock">
      <img class="img" :src="product.image" alt="img" />
    </div>
    <div class="infoBlock">
      <div class="title">{{ product.title }}</div>
      <div class="info">
        <div class="rateBlock">
          <StarIcon />
          <span class="rate">{{
            product.rating ? product.rating.rate : "No rating"
          }}</span>
        </div>
        <div class="price">$ {{ product.price }}</div>
        <div class="buyBlock">
          <div class="btnsAddDel">
            <button class="btnMinus"><MinusIcon /></button>
            <div>{{ count }}</div>
            <button class="btnPlus"><PlusIcon /></button>
          </div>
          <button class="btnAddCard">
            Add to card
            <ShoppingSmallIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from "@/assets/Star.vue";
import ShoppingSmallIcon from "@/assets/ShoppingSmall.vue";
import MinusIcon from "@/assets/Minus.vue";
import PlusIcon from "@/assets/Plus.vue";
import { mapState } from "vuex";
export default {
  props: ["product"],
  components: {
    StarIcon,
    ShoppingSmallIcon,
    MinusIcon,
    PlusIcon,
  },
  computed: {
...mapState('products', ['count'])
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 250px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background: $primary;
  margin-left: 20px;
}
.imgBlock {
  width: 170px;
  height: 170px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 15px;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.infoBlock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 115px;
}
.rateBlock {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}
.rate {
  color: rgba(51, 51, 51, 0.6);
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
  display: contents;
}
.star {
  margin-right: 5px;
}
.price {
  color: $secondary;
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
  margin-bottom: 6px;
}
.title {
  color: $secondary;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.btnsAddDel {
  display: flex;
  align-items: center;
}
.buyBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btnAddCard {
  display: flex;
  align-items: center;
}
.shoppingSmall {
  margin-left: 4px;
}
.btnMinus {
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.btnPlus {
  margin-left: 8px;
  display: flex;
  align-items: center;
}
</style>
