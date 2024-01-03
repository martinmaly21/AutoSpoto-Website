import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import App from './App.vue'
import MainCard from './components/MainCard.vue'
import EULACard from './components/EULACard.vue'
import PrivacyCard from './components/PrivacyCard.vue'


createApp(App).mount('#app')

const routes = [
    { 
        path: '/', name: "Home", component: MainCard,
    },
    {
        path: '/eula', name: "EULACard", component: EULACard
    },
    {
        path: '/privacy', name: "PrivacyCard", component: PrivacyCard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')