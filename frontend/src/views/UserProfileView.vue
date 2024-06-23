<template>
  <div class="profile-page-container">
    <h1 class="title">Profile Page</h1>
    <UserProfileComponent />
    <div class="button-group">
      <button @click="goToMap" class="button">Go to Map</button>
      <button @click="logout" class="button">Logout</button>
    </div>
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

<style scoped>
@import url('https://fonts.cdnfonts.com/css/rock-font');

.profile-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100vh;
  background: linear-gradient(to top, #7a4530, #1a1112);
  background-attachment: fixed;
  background-size: cover;
}

.title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'RockFont', sans-serif;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1%;
}

.button {
  background-color: #7a4530;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #5a3320;
}

html, body, #profile-page-container {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Evitar que el header sea afectado por el padding */
@media screen and (min-width: 768px) {
  .profile-page-container {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>