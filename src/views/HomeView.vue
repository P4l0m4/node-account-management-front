<template>
  <main><SignIn @redirectUser="$router.push({ name: 'AccountCreated' })" /></main>
</template>

<script>
import SignIn from '@/components/SignIn.vue'

export default {
  components: {
    SignIn,
  },
}
</script>

<style lang="scss" scoped></style>
