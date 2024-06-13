import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

axios.defaults.baseURL = 'http://localhost:8000';

const token = localStorage.getItem('auth_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

const app = createApp(App);
app.use(router);
app.mount('#app');