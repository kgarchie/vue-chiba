import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'


axios.defaults.baseURL = 'https://bosireallan.pythonanywhere.com'
const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
