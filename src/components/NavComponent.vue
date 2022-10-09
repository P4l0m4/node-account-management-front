<template>
  <nav class="nav">
    <router-link class="nav__link" :to="{ name: 'home-page' }" exact>Home</router-link>
    |
    <router-link class="nav__link" :to="{ name: 'my-account' }" exact>My account</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 16px;
  display: flex;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  &__link {
    text-decoration: none;
    color: black;
    line-height: 16px;
    white-space: nowrap;
  }
  .router-link-exact-active {
    color: teal;
  }
}
</style>
