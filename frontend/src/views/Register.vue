<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
  
      <!-- Botón para ir al MapComponent -->
      <button @click="goToMap">Go to Map</button>
  
      <!-- Botón para ir al LoginComponent -->
      <button @click="goToLogin">Go to Login</button>
      
      <!-- Aquí cargamos el componente MapComponent -->
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import HelloWorld from './components/HelloWorld.vue';
  
  const router = useRouter();
  
  const goToMap = () => {
    // Redireccionar a la ruta del MapComponent
    router.push('/map');
  };
  
  const goToLogin = () => {
    // Redireccionar a la ruta del LoginComponent
    router.push('/login');
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>