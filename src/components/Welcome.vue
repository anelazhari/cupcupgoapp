<template>
  <div class="welcome">
    <h1>Welcome!</h1>

    <div class="register">
       <button type="button" @click="goRegister">Register</button> 
    </div>
    <div class="login">
      <button type="button" @click="goLogin">Login</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  },
  components: {},
  methods: {
    goRegister: function () {
      this.$router.push('/Register');
    },
    goLogin: function () {
      this.$router.push('/Login')
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
