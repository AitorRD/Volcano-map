import { createApp } from 'vue'; // Importa la función createApp en lugar de Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import LoginComponent from './components/LoginComponent.vue';
import MapComponent from './components/MapComponent.vue';

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/map', component: MapComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App); // Crea la aplicación con createApp
app.use(router); // Usa el enrutador con la aplicación
app.mount('#app'); // Monta la aplicación en el elemento con el id 'app'
