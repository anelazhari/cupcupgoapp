<template>
  <div class="account">
    <h1>Hi {{userName}}!</h1>

    
    <div class="balance">Balance €{{balance}}</div>
    <button @click="logOut" class="logoutbutton">Logout</button>
    <div class="error">{{errorMessage}}</div>

    <div class="navigation">
        <button @click="goBack" class="button-menu"></button>
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
          errorMessage: null,
          balance: null
      }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
        this.$router.push('/')
    }
  },
  mounted: function () {
      this.getBalance();
  },
  computed: {
      accountId: function () {
          return this.$session.get('accountId');
      },
      userName: function () {
          return this.$session.get('username');
      }  
  },
  methods: {
    goBack: function () {
        this.$router.push('/Activities')
    },
    logOut: function () {
        this.$session.destroy()
        this.$router.push('/')
    },
    getBalance: function () {
        backendAPI.activities(this.accountId).then((data) => {
            this.balance = data.balance / 100;
        }).catch((error) => {
            this.errorMessage = error || 'An unforseen error happened please try again';
        });
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.balance {
    padding-top: 20%;
    font-size: 32px;
    font-weight: bold;
}

.logoutbutton {
  margin: 10px;
  margin-top: 50vh;
  padding: 10px 40px;
  border-radius: 15px;
}

.navigation {
    position: absolute;
    top: 0px;
    left: 50px;
}
</style>
