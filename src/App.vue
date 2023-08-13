<template>
      <div class="app">
        <Layout>
          <router-view />
        </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  components: { Layout }
}
</script>

<style lang="scss" >
.app {
  max-width: 1280px;
  margin: 0 auto;
}
</style>