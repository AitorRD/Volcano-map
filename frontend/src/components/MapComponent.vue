<template>
  <div class="map-container">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([0, 0], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }
  }
  }
</script>

<style scoped>
.map-container {
  height: 100vh;
  width: 100%;
}

.map {
  height: 100%;
}
</style>
