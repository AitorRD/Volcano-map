
<template>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Nombre de usuario">
      <input type="password" v-model="password" placeholder="Contraseña">
      <button type="submit">Iniciar sesión</button>
    </form>
  </template>

  <script>
  /* eslint-disable */
  export default { 
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        axios.post('/login/', { username: this.username, password: this.password })
          .then(response => {
          })
          .catch(error => {
          });
      }
    }
  }
  </script>