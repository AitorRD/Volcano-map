<template>
  <div id="app">
    <!-- Botón para ir al LoginComponent -->
    <router-link to="/login">Go to Login</router-link>
    <MapComponent />
  </div>

</template>

<script setup>
import MapComponent from './components/MapComponent.vue';
</script>

<style>
#app {
  text-align: center;
}
</style>