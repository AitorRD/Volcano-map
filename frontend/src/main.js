import { createApp } from 'vue'; // Importa la función createApp en lugar de Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory en lugar de VueRouter
import LoginComponent from './components/LoginComponent.vue';

const routes = [
  { path: '/login', component: LoginComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App); // Crea la aplicación con createApp
app.use(router); // Usa el enrutador con la aplicación
app.mount('#app'); // Monta la aplicación en el elemento con el id 'app'