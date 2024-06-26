import './assets/main.css'

import { createApp } from 'vue'
// import router from './router'
// import App from './App.vue'
// import Home from './components/Home.vue'
import RedirectView from './views/RedirectView.vue'

const app = createApp(RedirectView)

// app.use(router)

app.mount('#app')
