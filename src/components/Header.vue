<template>
  <header class="header">
    <router-link to="/" class="logo">Shop</router-link>
    <div class="block">
      <nav class="nav">
        <ul class="ul">
          <li v-for="link in links" :key="link.path" class="li">
            <router-link :to="link.path" class="link">
              {{ link.label }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="btns">
        <router-link to="/" class="btn">
          <UserIcon />
        </router-link>
        <button class="btn">
          <SearchIcon />
        </button>
        <router-link to="/favorite" class="btn">
          <HearthIcon />
        </router-link>
        <button class="btn">
          <ShoppingIcon />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import UserIcon from "@/assets/User.vue";
import SearchIcon from "@/assets/Search.vue";
import ShoppingIcon from "@/assets/Shopping.vue";
import HearthIcon from "@/assets/Hearth.vue";
export default {
  components: { UserIcon, SearchIcon, ShoppingIcon, HearthIcon },
  data() {
    return {
      links: [
        { path: "/", label: "Catalog" },
        { path: "/about", label: "About" },
        { path: "/contacts", label: "Contacts" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 80px;
  margin-bottom: 50px;
  padding: 21px 0;
  border-bottom: 1px solid $additional;
}

.nav {
  display: flex;
  align-items: center;
}

.link {
  color: $secondary;
}

.logo {
  width: 77px;
  color: $accent;
  font-family: Roboto;
  font-size: 32px;
  line-height: normal;
}

.ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 492px;
}

.li {
  color: $secondary;
  font-family: Roboto;
  font-size: 20px;
  line-height: normal;
}

.block {
  display: flex;
  justify-content: space-between;
  width: 832px;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 165px;
}

.btn {
  display: flex;
}
</style>
