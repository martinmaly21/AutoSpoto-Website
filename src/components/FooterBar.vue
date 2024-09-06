<template>
    <div class="footer">
      <div class="app-name">
        AutoSpoto 2024
      </div>

      <div class="footer-button-holder">

        <div class="built-by">
          Built with ❤️ by
        </div>

        <div class="who-we-are" @click="openMartinMalyGithub()">
          Martin Maly
        </div>

        <div class="who-we-are-divider">
          &
        </div>

        <div class="who-we-are" @click="openAndrewCaravaggioGithub()">
          Andrew Caravaggio
        </div>

        <RouterLink class="footerLink" to="/privacy">
          Privacy
        </RouterLink>

        <RouterLink to="/eula" class="footerLink">EULA</RouterLink>
      </div>
    </div>
</template>