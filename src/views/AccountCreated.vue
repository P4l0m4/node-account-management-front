<template>
  <main>
    <h1>Success !</h1>
    <h2>Your account has been created</h2>
    <router-link :to="{ name: 'MyAccount' }">Go to my account</router-link>
  </main>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped></style>
