<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');

const register = async () => {
  try {
    await axios.post('api/auth/users/', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    alert('User registered successfully!'); // Mensaje de éxito usando alert
    router.push('/login'); // Redirigir al login
  } catch (error) {
    console.error('Registration error:', error);
    alert('Failed to register user.'); // Mensaje de error usando alert
  }
};
</script>