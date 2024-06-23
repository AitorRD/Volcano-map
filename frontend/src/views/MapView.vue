<template>
  <div id="map-view">
    <HeaderComponent />
    <main class="main-content">
      <MapComponent />
    </main>
  </div>
</template>

<script setup>
import MapComponent from '../components/MapComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
//import VolcanoSearch from '../components/VolcanoSearch.vue'

</script>

<style scoped>
html, body, #map-view {
  height: 100%;
  margin: 0;
  background: linear-gradient(to top, #7a4530, #060404);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Para ocultar la barra de desplazamiento horizontal */
}

#map-view {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.header {
  flex: 0 0 10%; /* El encabezado ocupa el 10% de la altura visible */
  width: 100%;
}

.main-content {
  flex: 1 1 90%; /* El contenido principal ocupa el 90% restante de la altura */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.header, .main-content {
  width: 100%;
}

.header {
  position: relative;
  text-align: center;
  color: white;
}

</style>

