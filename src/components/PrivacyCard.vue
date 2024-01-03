<template>
<div class="privacy-card">
    <div class="desktop-nav">
      <class class="nav-auto-spoto-logo-container">
        <img class="nav-auto-spoto-logo" src="@/assets/autospoto-app-icon1.png" alt="AutoSpoto logo">
      </class>
      
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

    <div class="privacy-contents">
        
    </div>
</div>
</template>

<style scoped>

.privacy-card {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 35%);
}

.nav-auto-spoto-logo {
    width: 100%;
    height: 100%;
  }

.desktop-nav {
    align-items: flex-start;
    background-color: transparent;
    scroll-behavior: smooth;
    justify-content: flex-end;
    margin-right: 16px;
    display: flex;
    align-items: center;
  }

  .nav-auto-spoto-logo-container {
    height: 60px;
    width: 60px;
    margin-left: 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .nav-auto-spoto-logo-container:hover { 
    transform: scale(1.1);
  }

  .nav-spacer {
    flex-grow:1 
  }

  hr {
    color: gray;
  }

  .nav-links {
    display: flex;
    transition: all 300ms ease;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
    scroll-behavior: smooth;
    color: white;
    font-family: JosefinSansSemibold;
    font-size: 16pt;
  }

  a:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(56, 210, 17);
    cursor: pointer;
  }

</style>

<script setup>
    // import { useRouter } from "vue-router";
    // const router = useRouter();
</script>

<script>
  export default {
      methods: {
        mounted () {
          window.scrollTo(0, 0);
      },
      openEmail() {
        window.location = "mailto:autospoto.official@gmail.com";
      }
    },
  };
</script>