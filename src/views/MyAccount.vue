<template>
  <main>
    <h1>My account</h1>
    <div class="account-infos">
      <p>{{ user.firstName }}</p>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
}
</script>

<style lang="scss" scoped>
.account-infos {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: black solid 1px;
}
</style>
