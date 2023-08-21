<template>
  <footer class="footer">
    <div class="autor">© Valeev A.I</div>
    <div class="block">
      <div class="telegram">telegram</div>
      <div class="year">Ufa, 2023</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $additional;
  max-height: 80px;
  padding: 12px;
  margin-top: 20px;
}
.block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 51px;
  align-items: end;
}
</style>
