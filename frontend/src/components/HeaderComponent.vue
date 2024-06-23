<template>
    <header class="header">
      <h1 class="header-title">
        <span class="rocks-text">VULCAN</span>
        <img src="@/assets/volcan_eruption.gif" alt="Volcano GIF" class="volcano-gif">
        <span class="rocks-text">PREDICTION</span>
      </h1>
      <nav class="header-nav">
        <button v-if="isLoggedIn" @click="goToProfile" class="header-button">Profile</button>
        <button v-if="isLoggedIn" @click="logout" class="header-button">Logout</button>
        <button v-if="!isLoggedIn" @click="goToRegister" class="header-button">Register</button>
        <button v-if="!isLoggedIn" @click="goToLogin" class="header-button">Login</button>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const isLoggedIn = ref(false);
  
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
    localStorage.removeItem('auth_token');
    window.location.reload();
  };
  
  // Verificar si el usuario está autenticado al cargar el componente
  onMounted(() => {
    const token = localStorage.getItem('auth_token');
    isLoggedIn.value = !!token;
  });
  </script>
  
  <style scoped>
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vh; /* El encabezado ocupa el 10% de la altura visible */
    background-image: url('~@/assets/header.png'); /* Utilizamos la imagen como fondo del header */
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
  }
  
  .header-title {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .rocks-text {
    font-family: 'Rock Salt', cursive; /* Utilizamos la fuente 'Rock Salt' para un estilo rocoso */
  }
  
  .volcano-gif {
    width: 2em; /* Ajustar el tamaño del GIF */
    height: auto;
    margin: 0 10px; /* Espacio alrededor del GIF */
  }
  
  .header-nav {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    gap: 1rem;
  }
  
  .header-button {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .header-button:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  </style>