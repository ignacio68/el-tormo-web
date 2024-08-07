import './assets/main.css'

import { createApp } from 'vue'
// import router from './router'
import i18n from './i18n'

// import App from './views/App.vue'
// import Home from './components/Home.vue'
import Maintenance from './views/Maintenance.vue'

const app = createApp(Maintenance)
app.use(i18n)

// app.use(router)

app.mount('#app')
