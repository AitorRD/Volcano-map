<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script setup>
</script>

<style>
#app {
  text-align: center;
}

html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif; /* Asegúrate de tener una fuente legible */
  background: linear-gradient(to top, #1a1112, #7a4530);
  background-attachment: fixed;
  background-size: cover;
}

</style>