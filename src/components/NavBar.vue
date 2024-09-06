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
</script>