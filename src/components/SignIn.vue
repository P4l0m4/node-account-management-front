<template>
  <form method="POST" @submit.prevent="submit" novalidate>
    <label for="">Sign up :</label>
    <input type="text" placeholder="First name" required autocomplete="given-name" v-model="firstName" />
    <input type="text" placeholder="Last name" required autocomplete="family-name" v-model="lastName" />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button type="submit">Create an account</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      createUser: 'user/createUser',
    }),

    async submit() {
      try {
        await this.createUser({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })

        this.$emit('redirectUser')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.response {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}
</style>
