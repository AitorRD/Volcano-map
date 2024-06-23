<template>
  <div class="volcano-details" v-if="volcano">
    <p><strong>Name:</strong> {{ volcano.name }}</p>
    <p><strong>Location:</strong> {{ volcano.location }}</p>
    <p><strong>Country:</strong> {{ volcano.country }}</p>
    <p><strong>Height:</strong> {{ volcano.height }} meters</p>
    <p><strong>Next Eruption:</strong> {{ formatTimeToEruption(volcano.eruption_time) }}</p>
    <button @click="goToMap" class="button">Go to Map</button>
  </div>
  <div v-else>
    Loading volcano details...
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'; // Importa useRoute desde vue-router

const router = useRouter();
const route = useRoute();

const loadVolcanoDetails = async () => {
  try {
    const volcanoId = route.params.id; // Accede a $route directamente
    const response = await axios.get(`/api/volcanoes/${volcanoId}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error loading volcano details:', error);
    return null;
  }
};

const formatTimeToEruption = (timeInSeconds) => {
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
};

const goToMap = () => {
  router.push('/');
};

const volcano = loadVolcanoDetails(); // Llama a la función para cargar los detalles del volcán

</script>

<style scoped>
.volcano-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
  border-radius: 10px; /* Bordes suaves */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para un aspecto más suave */
  margin-top: 2rem; /* Margen superior */
  color: #333; /* Color de texto */
  font-size: 1.2rem; /* Tamaño de fuente */
}

.button {
  background-color: #7a4530;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1rem; /* Espacio encima del botón */
  transition: background-color 0.3s;
  padding-top: 1rem;
}

.button:hover {
  background-color: #5a3320;
}
</style>