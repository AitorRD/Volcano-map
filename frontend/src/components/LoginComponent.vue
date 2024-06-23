<template>
  <div class="login-container">
    <h1 class="title">Login Page</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" placeholder="Username" required class="input-field" />
      <input v-model="password" placeholder="Password" type="password" required class="input-field" />
      <div class="button-group">
        <button type="submit" class="button">Login</button>
        <button @click="goToRegister" class="button">Register Here</button>
        <button @click="goToMap" class="button">Return to Map</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRegister = () => {
  router.push('/register');
};
const goToMap = () => {
    router.push('/');
  };
  
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

<style scoped>
@import url('https://fonts.cdnfonts.com/css/rock-font');

.login-container {
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

.login-form {
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