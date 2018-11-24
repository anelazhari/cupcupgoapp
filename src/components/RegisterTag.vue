<template>
  <div class="register-tag">
    <h1>Register Tag</h1>
    <button @click="koora">GET NFC</button>
    <br/>
    <p id="log"></p>
    <p>{{message}}</p>

  </div>
</template>

<script>
// import nfcAPI from '../api/nfc';
export default {
  name: "RegisterTag",
  props: {
    msg: String
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  data: function() {
    return {
      message: null
    };
  },
  mounted: function() {
    // this.readWriteNfc();
  },
  components: {},
  methods: {
    koora: function() {
      console.log(window.navigator);
      if (window.navigator.nfc) {
          this.message = 'HOORAY';
      } else {
          this.message = 'NOOO!';
      }
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
