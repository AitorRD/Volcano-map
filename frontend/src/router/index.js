import { createRouter, createWebHistory } from 'vue-router';
import MapView from '../views/MapView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import VolcanoDetailsView from '../views/VolcanoDetailsView.vue';

const routes = [
  { path: '/', component: MapView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/profile', component: UserProfileView },
  { path: '/volcano/:id', component: VolcanoDetailsView },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;