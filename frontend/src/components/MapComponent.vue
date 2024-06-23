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
import eruptionMarkerIcon from '@/assets/volcan_eruption.png';

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      volcanoes: []
    };
  },
  async mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([0, 0], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Espera a que el mapa esté completamente cargado antes de hacer cualquier otra cosa
      this.map.whenReady(() => {
        this.loadVolcanoes();
      });
    },
    async loadVolcanoes() {
      try {
        const response = await axios.get('/api/volcanoes/');
        this.volcanoes = response.data;

        this.volcanoes.forEach(volcano => {
          const customIcon = this.getMarkerIcon(volcano.eruption_time);
          const marker = L.marker([volcano.latitude, volcano.longitude], { icon: customIcon });

          marker.bindTooltip(this.createPopupContent(volcano, volcano.id), {
            direction: 'top',
            offset: [0, -20]
          });

          marker.on('click', () => this.onMarkerClick(volcano.id));

          marker.addTo(this.map);
        });
      } catch (error) {
        console.error('Error loading volcanoes:', error);
      }
    },
    onMarkerClick(volcanoId) {
      this.$router.push(`/volcano/${volcanoId}`);
    },
    createPopupContent(volcano) {
      let popupContent = `
        <b>${volcano.name}</b><br>
        Location: ${volcano.location}<br>
        Country: ${volcano.country}<br>
        Height: ${volcano.height} meters<br>
        Next Eruption: ${this.formatTimeToEruption(volcano.eruption_time)}
      `;
      return popupContent;
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
      const secondsInMonth = 30 * 24 * 60 * 60; // Un mes en segundos

      if (timeInSeconds < secondsInMonth) {
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
  },
  beforeUnmount() {
    // Limpiar el mapa y los recursos relacionados al desmontar el componente
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
};
</script>
<style scoped>
.map-container {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
  border-radius: 10px; /* Bordes suaves */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para un aspecto más suave */
  padding: 1rem;
}

.map {
  height: 100%;
}
</style>