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
    <RouterView />

    <a class="product-hunt" href="https://www.producthunt.com/posts/autospoto?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-autospoto" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=443478&theme=light" alt="AutoSpoto - Never&#0032;lose&#0032;a&#0032;recommended&#0032;song&#0032;again&#0033; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

    <hr />

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
  </div>
  
</template>

<script>
  export default {
      methods: {
      openMartinMalyGithub() {
        window.open("https://github.com/martinmaly21", "_blank");
      },
      openAndrewCaravaggioGithub() {
        window.open("https://github.com/andrewcara", "_blank");
      },
      openEmail() {
        window.location = "mailto:autospoto.official@gmail.com";
      }
    },
  };
</script>

<style>
html {
  background-color: black
}

.product-hunt {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    margin-left: 16px;
    margin-right: 16px;
    align-items: center;
  }
  
  .app-name {
    color: white;
    font-family: JosefinSansBold;
  }

  .footer-button-holder {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }

  .built-by {
    color: white;
    font-family: JosefinSansRegular;
  }

  .who-we-are {
    color: white;
    font-family: JosefinSansBold;
    margin-right: 8px;
    cursor: pointer;
    padding: 0em 0.5em;
  }

  .who-we-are:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

  .who-we-are-divider {
    color: white;
    font-family: JosefinSansRegular;
    margin-right: 8px;
  }

  .privacy:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
  }

  .footerLink {
    color: white;
    font-family: JosefinSansBold;
    margin-left: 16px;
    cursor: pointer;
    text-decoration: none;
  }

  .footerLink:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
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
    display: flex;
    align-items: center;
    background-color: rgba(45, 45, 45, 1);
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
    margin-right: 16px;
  }

  a:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(56, 210, 17);
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
  .built-by {
    display: none;
  }

  .who-we-are-1 {
    display: none;
  }

  .who-we-are-divider {
    display: none;
  }

  .who-we-are-2 {
    display: none;
  }
    
  }
</style>
