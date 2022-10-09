<template>
  <div id="app">
    <header>
      <nav-component />
    </header>
    <router-view />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
export default {
  components: {
    NavComponent,
  },
}
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 32px;

  header {
    width: 100%;
    height: 16px;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
