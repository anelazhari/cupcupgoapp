<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Welcome/>
  </div>
</template>

<script>
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Welcome from './components/Welcome.vue'


export default {
  name: 'app',
  components: {
    Register,
    Welcome,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
