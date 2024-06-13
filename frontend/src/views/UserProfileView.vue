<template>
    <div>
      <h1>Profile Details</h1>
      <UserProfileComponent />
    </div>
    <div>
      <!-- Botón para ir al MapComponent -->
      <button @click="goToMap">Go to Map</button>
  
      <!-- Botón para ir al LoginComponent -->
      <button @click="logout">Logout</button>
    </div>
  </template>
  
<script setup>
import { useRouter } from "vue-router";
import UserProfileComponent from "@/components/UserProfileComponent.vue";
  
  const router = useRouter();
  
  const goToMap = () => {
    router.push('/');
  };
  
  const logout = () => {
  localStorage.removeItem('auth_token'); 
  router.push('/'); 
    };
</script>
  
  <style>

  </style>