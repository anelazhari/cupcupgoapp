<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style>
body {
  padding: 0px;
  margin: 0px;
  background-image: url("./assets/screen 1.png") ;
  background-size:cover;
  color: white;

}

@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  max-height:100vh;

}
</style>
