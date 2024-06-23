<template>
    <div>
      <h1>Login Page</h1>
      <LoginComponent />
      <button @click="goToRegister">Register Here</button>
    </div>
  </template>
  
  <script setup>
  import LoginComponent from '@/components/LoginComponent.vue';
  import { useRouter } from 'vue-router';

const router = useRouter();


  const goToRegister = () => {
  router.push('/register');
};

  </script>
  
  <style>

  </style>