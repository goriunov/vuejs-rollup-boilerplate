<template>
  <div>
    <img src="assets/vue.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: this.$store.getters.message
    };
  }
};
</script>

<style lang='scss' scoped>
h1 {
  padding: 0 0.25em;
}
</style>