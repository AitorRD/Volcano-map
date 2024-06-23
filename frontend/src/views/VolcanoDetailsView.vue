<template>
  <div class="profile-page-container">
    <h1 class="title">Volcano Details</h1>
    <VolcanoDetailsComponent />
  </div>
</template>

<script setup>
import VolcanoDetailsComponent from "@/components/VolcanoDetailsComponent.vue";

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

html, body, #profile-page-container {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>