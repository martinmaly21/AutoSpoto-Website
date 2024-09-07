<template>
    <div class="container">
        <div class="desktop-nav">
        <RouterLink to="/" class="nav-auto-spoto-logo-container">
            <img class="nav-auto-spoto-logo" src="@/assets/autospoto-app-icon1.png" alt="AutoSpoto logo">
        </RouterLink>
        
        <div class="nav-spacer">

        </div>

        <div>
            <ul class="nav-links">
            <li>
                <a @click="openEmail()">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';

    function openEmail() {
        window.location = "mailto:autospoto.official@gmail.com"
    }
</script>

<style scoped>
    .container {
        background-color: black;
        box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.5);
    }
</style>