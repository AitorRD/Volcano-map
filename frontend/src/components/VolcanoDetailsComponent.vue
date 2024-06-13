<template>
    <div class="volcano-details">
      <h2>Volcano Details</h2>
      <div v-if="volcano">
        <p><strong>Name:</strong> {{ volcano.name }}</p>
        <p><strong>Location:</strong> {{ volcano.location }}</p>
        <p><strong>Country:</strong> {{ volcano.country }}</p>
        <p><strong>Height:</strong> {{ volcano.height }} meters</p>
        <p><strong>Next Eruption:</strong> {{ formatTimeToEruption(volcano.eruption_time) }}</p>
      </div>
      <router-link to="/">Back to Map</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VolcanoDetails',
    data() {
      return {
        volcano: null
      };
    },
    async mounted() {
      await this.loadVolcanoDetails();
    },
    methods: {
      async loadVolcanoDetails() {
        try {
          const volcanoId = this.$route.params.id;
          const response = await axios.get(`/api/volcanoes/${volcanoId}/`);
          this.volcano = response.data;
        } catch (error) {
          console.error('Error loading volcano details:', error);
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
        }
    }
}
</script>
  
  <style scoped>
  .volcano-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>