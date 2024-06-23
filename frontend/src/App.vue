<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script setup>
</script>

<style>
#app {
  text-align: center;
}

html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif; /* Asegúrate de tener una fuente legible */
  background: linear-gradient(to top, #7a4530, #060404);
  background-attachment: fixed;
  background-size: cover;
}

.button {
  font-family: 'Arial', sans-serif; /* Aplica la fuente 'Rock Font' a los botones */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

/* Otros estilos con la fuente 'Rock Font' */
.title {
  font-family: 'RockFont', sans-serif; /* Ejemplo de aplicar la fuente a un título */
  font-size: 2rem;
  font-weight: bold;
}
</style>