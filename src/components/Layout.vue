<template>
  <Header></Header>
  <main>
    <slot></slot>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss" scoped></style>