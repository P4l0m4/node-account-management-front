<template>
  <main>
    <h1>My account</h1>
    <div class="account-infos">
      <p>Name: {{ result.firstName }} {{ result.lastName }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      result: null,
    };
  },
  components: {},
  methods: {
    getName(result) {
      if (result != null) {
        this.result = result;
      } else {
        console.log("result is null" + result);
      }
    },
  },
  mounted() {
    this.getName(result);
  },
};
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
