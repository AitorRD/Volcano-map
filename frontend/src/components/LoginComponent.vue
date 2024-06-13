<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('api/auth/token/login/', {
      username: username.value,
      password: password.value
    });
    const token = response.data.auth_token;
    localStorage.setItem('auth_token', token);
    console.log('User logged in:', token);
    alert('Login successful!'); // Mensaje de éxito usando alert
    router.push('/'); // Redirigir al mapa u otra página principal
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Please check your credentials.'); // Mensaje de error usando alert
  }
};
</script>