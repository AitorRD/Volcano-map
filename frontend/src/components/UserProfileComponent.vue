<template>
  <div class="profile-container">
    <div v-if="user">
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserProfileComponent',
  data() {
    return {
      user: null
    };
  },
  async mounted() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const response = await axios.get('/api/auth/users/me/', {
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

<style scoped>
.profile-container {
  background-color: #f5f5dc;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  padding-top: 2rem;
}

p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
</style>