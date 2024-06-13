<template>
  <div>
    <!-- Mostrar solo si el usuario está autenticado -->
    <button v-if="isLoggedIn" @click="goToProfile">Profile</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>

    <!-- Mostrar solo si el usuario NO está autenticado -->
    <button v-if="!isLoggedIn" @click="goToRegister">Register</button>
    <button v-if="!isLoggedIn" @click="goToLogin">Go to Login</button>

    <h1>Welcome to Map View</h1>
    <MapComponent />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import MapComponent from '../components/MapComponent.vue'; // Importar el componente MapComponent

const router = useRouter();
const isLoggedIn = ref(false); // Variable para verificar si el usuario está autenticado

const goToRegister = () => {
  router.push('/register');
};

const goToLogin = () => {
  router.push('/login');
};

const goToProfile = () => {
  router.push('/profile');
};

const logout = () => {
  localStorage.removeItem('auth_token'); // Limpiar el token de autenticación
  window.location.reload(); // Actualizar la página después de hacer logout
};

// Verificar si el usuario está autenticado al cargar el componente
onMounted(() => {
  const token = localStorage.getItem('auth_token');
  isLoggedIn.value = !!token; // Asignar true si hay token, false si no lo hay
});
</script>

<style scoped>
/* Estilos específicos para este componente si es necesario */
</style>

