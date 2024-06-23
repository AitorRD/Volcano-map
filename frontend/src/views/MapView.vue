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
  background: linear-gradient(to top, #1a1112, #7a4530);
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
}

.main-content {
  flex: 1 1 90%; /* El contenido principal ocupa el 90% restante de la altura */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header, .main-content {
  width: 100%;
}

.header {
  position: relative;
  text-align: center;
  color: white;
}

/* Margen del 5% a la izquierda y derecha */
@media screen and (min-width: 768px) {
  html, body, #map-view {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>

