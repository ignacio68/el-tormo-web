import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
// import router from './router'
import i18n from './i18n'

import App from './views/App.vue'

const app = createApp(App)
app.use(i18n).use(PrimeVue, {
  theme: 'none'
})

// app.use(router)

app.mount('#app')
