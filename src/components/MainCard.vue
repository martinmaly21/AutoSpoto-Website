<template>
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
  </head>
  <body>
     <nav id="desktop-nav">
        <div>
           <ul class="nav-links">
              <li><a @click="scrollToSection('story')">Story</a></li>
              <li><a @click="scrollToSection('how-it-works')">How it works?</a></li>
              <li><a @click="scrollToSection('blah')">Contact</a></li>
           </ul>
        </div>
     </nav>
     
     <div class="main-card">
      <class class="auto-spoto-logo-container">
        <img class = "auto-spoto-logo" src="@/assets/autospoto-app-icon1.png" alt="AutoSpoto logo">
      </class>
      <class class="auto-spoto-title">AutoSpoto</class>
      <class class="auto-spoto-subtitle">Never lose a recommended song again.</class>
        <div class="video-container">
           <video class="video" controls>
              <source src="@/assets/FinalDisplayAutoSpoto.mov" type="video/mp4">
              Your browser does not support the video tag.
           </video>
        </div>
        <button class="download-btn" @click="downloadDmg" target="_blank">
          Download now
        </button>
        <class class="download-extra-info">Requires macOS 13.0 or later</class>
     </div>

     <hr />

     <div class="story-card" id="story">
        TODO: STORY
     </div>

     <hr />

     <div class="how-it-works-card" id="how-it-works">
      TODO: HOW IT WORKS
     </div>

     <hr />

     <div class="footer">
     </div>
  </body>
</template>

<script>
export default {
  methods: {
    downloadDmg() {
      const dmgFileUrl = 'https://autospoto.xyz/AutoSpoto-Download.dmg';
      const link = document.createElement('a');
      link.href = dmgFileUrl;
      link.target = '_blank'; // Open in a new tab/window
      link.download = 'AutoSpoto-Download.dmg'; // Set the default download file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  },
};
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(59,59,59,1) 35%);
  }

  nav {
    align-items: flex-start;
    background-color: transparent;
    scroll-behavior: smooth;
    justify-content: flex-end;
    margin-right: 16px;
    display: flex;
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

  .main-card {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom: 20pt;
  }

  .auto-spoto-logo {
    width: 150px;
  }

  .auto-spoto-title {
    color: white;
    font-family: JosefinSansBold;
    font-size: 40pt;
  }

  .auto-spoto-subtitle {
    color: white;
    font-family: JosefinSansRegular;
    font-size: 20pt;
    margin-bottom: 20pt;
  }
  
  .video-container {
    max-width: 50%; /* Adjust the percentage as needed */
    width: 100%; 
    margin-left: auto;
    margin-right: auto;
  }

  .video {
    width: 100%;
    height: auto;
  }
  
  .download-btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    background-color: white;
    border-radius: 1rem;
    transition: all 300ms ease;
    margin-top:20px;
    border: rgb(53, 53, 53) 0.1rem solid;
    font-family: JosefinSansSemiBold;
    font-size: 14pt;
    width: 200pt;
    height: 35pt;
    line-height: 10pt;
  }

  .download-extra-info {
    color: white;
    font-family: JosefinSansRegular;
    font-size: 11pt;
    margin-top: 2pt;
  }
  
  .download-btn:hover {
    cursor: pointer;
  }

  .download-btn:hover {
    background: rgb(56, 210, 17);
    color: white;
  }

  .story-card {
    color: white;
  }
  .how-it-works-card {
    color: white;
  }

  @media screen and (max-width: 2600px) {
    #profile {
      height: 83vh;
      margin-bottom: 6rem;
    }
    .video-container {
      flex-wrap: wrap;
    }
    #download,
    #about {
      height: fit-content;
    }
    #minimal-view{
      display: none;
    }
  }
  
  @media screen and (max-width: 1200px) {
    #desktop-nav {
      display: none;
    }

    #minimal-view{
      display:flex;
    }

    #download,
    .download_page {
      margin-top: 2rem;
    }
    #profile,
    .section-container {
      display: block;
    }
    section,
    .section-container {
      height: fit-content;
    }
    section {
      margin: 0 5%;
    }
    .section__pic-container {
      width: 275px;
      height: 275px;
      margin: 0 auto 2rem;
    }
  }
  
  @media screen and (max-width: 600px) {
    #contact,
    footer {
      height: 40vh;
    }
    #profile {
      height: 83vh;
      margin-bottom: 0;
    }
    .contact-info-upper-container,
    .btn-container {
      flex-wrap: wrap;
    }
    .nav-links li a {
      font-size: 1rem;
    }
    .logo {
      font-size: 1.5rem;
    }
    .nav-links {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
    .section__pic-container {
      width: auto;
      height: 46vw;
      justify-content: center;
    }
    .text-container {
      text-align: justify;
    }
  }
</style>
