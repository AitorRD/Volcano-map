import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import('./views/MapView.vue') }, // Ruta para la página de inicio
  { path: "/map", component: () => import('./components/MapComponent.vue') }, // Ruta para el MapComponent
  { path: "/login", component: () => import('./components/LoginComponent.vue') }, // Ruta para el LoginComponent
];

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;