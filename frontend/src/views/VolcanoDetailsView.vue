<template>
  <div class="profile-page-container">
    <h1 class="title">Volcano Details</h1>
    <VolcanoDetailsComponent />
    <div class="button-group">
    <button @click="goToMap" class="button">Go to Map</button>
  </div>
  </div>
</template>

<script setup>
import VolcanoDetailsComponent from "@/components/VolcanoDetailsComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToMap = () => {
  router.push('/');
};

</script>

<style>
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
  padding-left: 5%;
  padding-right: 5%;
}

.title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'RockFont', sans-serif;
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
.button-group{
  padding-top: 1%;
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
</style>