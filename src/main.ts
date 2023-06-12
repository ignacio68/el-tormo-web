import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import Home from './components/Home.vue'
import router from './router'

const app = createApp(Home)

app.use(router)

app.mount('#app')
