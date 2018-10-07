<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <NavBar/>
    <Cameras/>
  </div>
</template>

<script>
import Cameras from './components/Cameras'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    Cameras,
    NavBar,
    data(){
      return {
        msg: "SwImProve"
      }
    }
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
