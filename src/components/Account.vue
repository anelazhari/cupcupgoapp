<template>
  <div class="account">
    <h1>Hi {{userName}}!</h1>

    

    <button @click="logOut">Logout</button>
    <div class="error">{{errorMessage}}</div>

    <div class="navigation">
        <button @click="goBack">Back</button>
    </div>

    

  </div>
</template>

<script>
import backendAPI from '../api/payment';

export default {
  name: "Account",
  props: {
    msg: String
  },
  data: function () {
      return {
          accountId: 1,
          userName: 'Sara',
          errorMessage: null
      }
  },
  methods: {
    goBack: function () {
        this.$router.push('/Activities')
    },
    logOut: function () {
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
