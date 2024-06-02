<template>
  <div id="app">
    <!-- <div class="system-bar">
      <img alt="xFanatical logo" src="~@/assets/logo.png" width="150" />
    </div> -->
    <!-- <WeatherApp /> -->
    <!-- <Login /> -->
    <!-- <Register /> -->
    <!-- <v-btn to="/movies">Movies</v-btn> -->
    <router-view> </router-view>
  </div>
</template>

<script setup>
// import WeatherApp from "./components/WeatherApp.vue";
import Login from './components/Login.vue'
import Register from './components/Register.vue'
</script>

<style>
body {
  margin: 0px;
}
#app {
  background-color: black;
  color: white;
}
.system-bar {
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
  padding: 8px;
}
</style>
