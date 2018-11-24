<template>
  <div class="welcome">
    <h1>Welcome!</h1>

    <div class="action-buttons">
    <div class="register">
       <button type="button" @click="goRegister">Register</button> 
    </div>
    <div class="login">
      <button type="button" @click="goLogin">Login</button> 
    </div>
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
h1 {
  margin-top: 20vh;
  font-size: 45px;
  font-weight: bold;
  color: white;
}
.register {
  margin: 10px;
}

.register button {
  padding: 10px 40px;
  border-radius: 15px;
}
.login {
  margin: 10px;
}
.login button {
  padding: 10px 40px;
  border-radius: 15px;

}

.action-buttons {
  margin-top: 40vh;
}
</style>
