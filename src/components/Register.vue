<template>
  <div class="register">
    <h1>Register</h1>

    <div class="email">
        <label for="email">Email: </label>
        <input v-model="email" id="email" type="text" placeholder="kimi@f1.com"/> 
    </div>
    <div class="password">
        <label for="password">Password: </label>
        <input v-model="password" id="password" type="password"/> 
    </div>
    <div class="submit">
        <button type="submit" @click="registerUser">Register!</button>
    </div>
    <div class="home">
        <button type="submit" @click="goHome">Back</button>
    </div>
    <div class="error">
        <p>{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import backendAPI from '../api/accounts';
export default {
  name: "Register",
  props: {
    msg: String
  },
  data: function () {
    return {
      email: null,
      password: null,
      errorMessage: null
    }
  },
  components: {},
  methods: {
        registerUser: function() {
            this.errorMessage = null;  // Empty the error message

            // Check valid email and password lenght
            if (!this.checkUserInput()) {
                return;
            }

            backendAPI.register(this.email, this.password).then((data) => {
                this.errorMessage = 'YEAH BABY!';
                this.$session.start()
                this.$session.set('accountId', data.accountId)
                this.$router.push('/Activities');
            }).catch((error) => {
                this.errorMessage = error || 'An unforseen error happened please try again';
                this.password = null;
            });

        },
        checkUserInput: function() {
            if (!this.email) {
                this.errorMessage = 'Please type your email address';
                return false;
            }
            if(!this.password) {
                this.errorMessage = 'Please type your password';
                return false;               
            }
            return true;
        },
        goHome: function () {
            this.$router.push('/')
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
    color: red;
}
</style>
