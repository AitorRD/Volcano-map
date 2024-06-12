<template>
  <div class="map-container">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import markerIcon from '@/assets/volcan.png';
import eruptionMarkerIcon from '@/assets/volcan_eruption.png'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
    this.loadVolcanoes();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([0, 0], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },
    async loadVolcanoes() {
      try {
        const response = await axios.get('/api/volcanoes/');
        const volcanoes = response.data;
        
        volcanoes.forEach(volcano => {
              const customIcon = this.getMarkerIcon(volcano.eruption_time);
              L.marker([volcano.latitude, volcano.longitude], { icon: customIcon })
                .addTo(this.map)
                .bindPopup(`
                  <b>${volcano.name}</b><br>
                  Location: ${volcano.location}<br>
                  Country: ${volcano.country}<br>
                  Height: ${volcano.height} meters<br>
                  Next Eruption: ${this.formatTimeToEruption(volcano.eruption_time)}
                `);
            });
      } catch (error) {
        console.error('Error loading volcanoes:', error);
      }
    },
    formatTimeToEruption(timeInSeconds) {
      const secondsInMinute = 60;
      const secondsInHour = 60 * secondsInMinute;
      const secondsInDay = 24 * secondsInHour;
      const secondsInMonth = 30 * secondsInDay;
      const secondsInYear = 12 * secondsInMonth; 

      let remainingTime = timeInSeconds;

      const years = Math.floor(remainingTime / secondsInYear);
      remainingTime %= secondsInYear;
      const months = Math.floor(remainingTime / secondsInMonth);
      remainingTime %= secondsInMonth;
      const days = Math.floor(remainingTime / secondsInDay);
      remainingTime %= secondsInDay;
      const hours = Math.floor(remainingTime / secondsInHour);
      remainingTime %= secondsInHour;
      const minutes = Math.floor(remainingTime / secondsInMinute);
      const seconds = remainingTime % secondsInMinute;

      return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    },
    getMarkerIcon(timeInSeconds) {
      const secondsInYear = 31536000; 

      if (timeInSeconds < secondsInYear) {
        return L.icon({
          iconUrl: eruptionMarkerIcon,
          iconSize: [32, 32], 
          iconAnchor: [16, 32], 
          popupAnchor: [0, -32] 
        });
      }

      return L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32] 
      });
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