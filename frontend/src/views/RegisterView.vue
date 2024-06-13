<template>
    <div>
      <h1>Registration Page</h1>
      <RegisterComponent />
    </div>
    <div>
      <!-- Botón para ir al MapComponent -->
      <button @click="goToMap">Go to Map</button>
  
      <!-- Botón para ir al LoginComponent -->
      <button @click="goToLogin">Go to Login</button>
    </div>
  </template>
  
<script setup>
import { useRouter } from "vue-router";
import RegisterComponent from "@/components/RegisterComponent.vue";
  
  const router = useRouter();
  
  const goToMap = () => {
    router.push('/');
  };
  
  const goToLogin = () => {
    router.push('/login');
  };
</script>
  
  <style>

  </style>