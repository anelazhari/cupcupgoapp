<template>
  <img src="../assets/loading.gif">
</template>

<script>
export default {
  name: "Loading",
  props: {
    msg: String
  },
  mounted: function () {
    setTimeout(() => {
      this.$router.push('/Welcome')
    }, 2000)
  },
  components: {},
  methods: {
    toWelcome: function () {
      this.$router.push('/Welcome');
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
