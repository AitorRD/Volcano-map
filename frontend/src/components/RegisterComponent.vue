<template>
  <div class="register-container">
    <h1 class="title">Registration Page</h1>
    <form @submit.prevent="register" class="register-form">
      <input v-model="username" placeholder="Username" required class="input-field" />
      <input v-model="email" placeholder="Email" type="email" required class="input-field" />
      <input v-model="password" placeholder="Password" type="password" required class="input-field" />
      <div class="button-group">
        <button type="submit" class="button">Register</button>
        <button @click="goToMap" class="button">Go to Map</button>
        <button @click="goToLogin" class="button">Go to Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const goToMap = () => {
  router.push('/');
};

const goToLogin = () => {
  router.push('/login');
};

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

<style scoped>
@import url('https://fonts.cdnfonts.com/css/rock-font');

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top, #7a4530, #1a1112);
  padding: 2rem;
}

.title {
  color: white;
  font-family: 'RockFont', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.register-form {
  background-color: #f5f5dc; /* Color crema para el fondo del formulario */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 2px solid #7a4530; /* Borde marrón */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 1.2rem; /* Aumentar tamaño del texto */
  color: #333;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
}

.button {
  background-color: #7a4530;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 0.5rem; /* Añadir espacio entre los botones */
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #5a3320;
}
</style>