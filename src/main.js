import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import App from './App.vue'
import MainCard from './components/MainCard.vue'
import EULACard from './components/EULACard.vue'
import PrivacyCard from './components/PrivacyCard.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAajOTNZFc-2ZLTtamtVhuJWjSLZ3m2bb0",
  authDomain: "autospoto-website.firebaseapp.com",
  projectId: "autospoto-website",
  storageBucket: "autospoto-website.appspot.com",
  messagingSenderId: "324990310527",
  appId: "1:324990310527:web:8c04fc45776b0e4a6c474a",
  measurementId: "G-NFZTBQ37P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

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