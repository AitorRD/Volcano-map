<template>
    <div>
      <h2>User Profile</h2>
      <div v-if="user">
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    async mounted() {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const response = await axios.get('api/auth/users/me/', {
            headers: {
              Authorization: `Token ${token}`
            }
          });
          this.user = response.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    }
  };
  </script>