import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const token = localStorage.getItem('auth_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

const app = createApp(App);
app.use(router);
app.mount('#app');