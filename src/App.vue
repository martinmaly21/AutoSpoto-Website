<template>
  <div class="container">
    <RouterView />

    <hr />

    <div class="footer">
      <div class="app-name">
        AutoSpoto 2024
      </div>

      <div class="footer-spacer">

      </div>

      <div class="footer-button-holder">

        <div class="built-by">
          Built by
        </div>

        <div class="who-we-are-1" @click="openMartinMalyGithub()">
          Martin Maly
        </div>

        <div class="who-we-are-divider">
          &
        </div>

        <div class="who-we-are-2" @click="openAndrewCaravaggioGithub()">
          Andrew Caravaggio
        </div>

        <div class="privacy" @click="handleUserTappingPrivacy">
          Privacy
        </div>

        <div class="eula" @click="handleUserTappingEULA">
            EULA
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();

  function handleUserTappingEULA() {
    router.push('/eula')
  }

  function handleUserTappingPrivacy() {
    router.push('/privacy')    
  }
</script>

<script>
  export default {
      methods: {
      openMartinMalyGithub() {
        window.open("https://github.com/martinmaly21", "_blank");
      },
      openAndrewCaravaggioGithub() {
        window.open("https://github.com/andrewcara", "_blank");
      }
    },
  };
</script>

<style>
html {
  background-color: black
}

.footer {
    display: flex;
    flex-direction: row;
    height: 40px;
    margin-left: 16px;
    margin-right: 16px;
    align-items: center;
  }
  
  .app-name {
    color: white;
    font-family: JosefinSansBold;
  }

  .footer-spacer {
    flex-grow:1 
  }

  .footer-button-holder {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
  }

  .built-by {
    color: white;
    font-family: JosefinSansRegular;
    margin-right: 8px;
  }

  .who-we-are-1 {
    color: white;
    font-family: JosefinSansBold;
    margin-right: 8px;
    cursor: pointer;
  }

  .who-we-are-1:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

  .who-we-are-divider {
    color: white;
    font-family: JosefinSansRegular;
    margin-right: 8px;
  }

  .who-we-are-2 {
    color: white;
    font-family: JosefinSansBold;
    margin-right: 24px;
    cursor: pointer;
  }

  .who-we-are-2:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

  .privacy {
    color: white;
    font-family: JosefinSansBold;
    margin-left: 24px;
    cursor: pointer;
  }

  .privacy:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

  .eula {
    color: white;
    font-family: JosefinSansBold;
    margin-left: 16px;
    cursor: pointer;
  }

  .eula:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

</style>
