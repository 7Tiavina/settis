import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Importer GSAP et le plugin ScrollToPlugin
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import App from './App.vue'
import router from './router'

// Enregistrer le plugin ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
