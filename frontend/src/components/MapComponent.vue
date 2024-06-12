<template>
  <div class="map-container">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import markerIcon from '@/assets/volcan_eruption.png'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
    this.loadVolcanoes();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },
    async loadVolcanoes() {
      try {
        const response = await axios.get('/api/volcanoes/');
        const volcanoes = response.data;
        
        const customIcon = L.icon({
          iconUrl: markerIcon,
          iconSize: [32, 32], // Ajusta el tamaño del ícono si es necesario
          iconAnchor: [16, 32], // Cambia el punto de anclaje del ícono
          popupAnchor: [0, -32] // Cambia la posición del popup
        });

        volcanoes.forEach(volcano => {
              L.marker([volcano.latitude, volcano.longitude], { icon: customIcon })
                .addTo(this.map)
                .bindPopup(`
                  <b>${volcano.name}</b><br>
                  Location: ${volcano.location}<br>
                  Country: ${volcano.country}<br>
                  Height: ${volcano.height} meters<br>
                  Next Eruption: ${volcano.eruption_time}
                `);
            });
      } catch (error) {
        console.error('Error loading volcanoes:', error);
      }
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