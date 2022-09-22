<template>
  <form method="POST" @submit.prevent="submit" novalidate>
    <label for="">Sign up :</label>
    <input
      type="text"
      placeholder="First name"
      required
      autocomplete="given-name"
      v-model="firstName"
    />
    <input
      type="text"
      placeholder="Last name"
      required
      autocomplete="family-name"
      v-model="lastName"
    />
    <input type="email" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button type="submit">Create an account</button>

    <div class="response" v-if="result">
      <!-- <p>Id: {{ result._id }}</p> -->
      <p>Name: {{ result.firstName }} {{ result.lastName }}</p>
      <p>Email: {{ result.email }}</p>
      <!-- <p>{{ result.password }}</p> -->
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      result: null,
    };
  },
  methods: {
    async submit() {
      try {
        const response = await fetch("/users", {
          method: "POST", //ou POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Authorization",
          },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          }),
        });
        let data = await response.json();
        this.result = data;
        // window.location.href = "http://localhost:8080/account-created";
      } catch (e) {
        console.log(e);
      }
    },
    //EMISSION TO MY ACCOUNT PAGE
    sendMessageToParent() {
      this.$emit("account-infos", this.result, this.firstName, this.lastName);
      // this.$emit("account-infos", this.firstName);
      // this.$emit("account-infos", this.lastName);
    },
  },
  mounted() {
    this.sendMessageToParent();
  },
};
</script>
<style lang="scss" scoped>
.response {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}
</style>
