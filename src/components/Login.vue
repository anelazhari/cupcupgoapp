<template>
  <div class="login">

    <div class="home">
        <button class="button-menu" type="submit" @click="goHome"></button>
    </div>

    <h1>Login</h1>

    <img src="../assets/app_logo.png" class="logo">

    <div class="action-area">
        <div class="email">
            <input v-model="email" id="email" type="text" placeholder="Username"/> 
        </div>
        <div class="password">
            <input v-model="password" id="password" type="password" placeholder="Type your PIN"/> 
        </div>
        <div class="submit">
            <button type="submit" @click="loginUser">Login!</button>
        </div>
        <div class="error">
            <p>{{errorMessage}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import backendAPI from '../api/accounts';
export default {
  name: "login",
  props: {
    msg: String
  },
  data: function () {
    return {
      email: null,
      password: null,
      errorMessage: null,
      accountId: null
    }
  },
  components: {},
  methods: {
        loginUser: function() {
            this.errorMessage = null;  // Empty the error message

            // Check valid email and password lenght
            if (!this.checkUserInput()) {
                return;
            }

            backendAPI.login(this.email, this.password).then((data) => {
                // this.errorMessage = 'YEAH BABY!';

                this.$session.start();
                this.$session.set('accountId', data.accountId);
                this.$session.set('username', this.email);
    
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

h1 {
    color: white;
}
input {
    margin: 0 auto;
    border: none; /* <-- This thing here */
    border:solid 1px #ccc;
    border-radius: 20px;
    padding: 2vh 8vh;
    margin-top: 10px;
    overflow: hidden;
}

.action-area {
padding: 0px;
}

.action-area button {
  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;
}

.logo {
    margin: 0px;
    padding: 0px;
    max-width: 100%;
}

.home {
    position: absolute;
    top: 0px;
    left: 50px;
}
</style>