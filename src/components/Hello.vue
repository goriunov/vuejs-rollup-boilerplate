<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Vue.jss - The Progressive JavaScript Framework"
    };
  }
};
</script>

<style lang='scss' scoped>
h1 {
  padding: 0 0.25em;
}
</style>