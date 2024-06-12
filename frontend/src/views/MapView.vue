<template>
  <div id="map-container">
    <h1>Welcome to Map View</h1>
    <MapComponent />
  </div>
</template>

<script setup>
import MapComponent from '../components/MapComponent.vue';
</script>

<style>
#map-container {
  height: 100vh;
  width: 100%;
}
</style>