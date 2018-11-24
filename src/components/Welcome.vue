<template>
  <div class="welcome">
    <h1>Welcome!</h1>

    <div class="register">
       <button type="button">Register</button> 
    </div>
    <div class="login">
      <button type="button">Login</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
