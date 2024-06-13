<template>
    <div>
      <input v-model="searchQuery" placeholder="Search for a volcano" />
      <button @click="searchVolcanoes">Search</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VolcanoSearch',
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      async searchVolcanoes() {
        if (this.searchQuery.trim() === '') {
          return;
        }
  
        try {
          const response = await axios.get('http://localhost:8000/api/volcanoes/search', {
            params: { search: this.searchQuery }
          });
          const volcanoes = response.data;
  
          if (volcanoes.length === 1) {
            // If there's exactly one result, navigate to the detail page
            this.$router.push({ name: 'VolcanoDetail', params: { id: volcanoes[0].id } });
          } else {
            // Handle multiple results or no results as needed
            // For example, show a list of results or a message indicating no matches found
            console.log('Multiple or no results found:', volcanoes);
          }
        } catch (error) {
          console.error('Error searching volcanoes:', error);
        }
      }
    }
  };
  </script>