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
              <li><a @click="openEmail()">Contact</a></li>
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
           <video class="video" autoplay>
              <source src="FinalDisplayAutoSpoto.mov" type="video/mp4">
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
      <p class="section__text__p1">Music Is Meant To Be Shared</p>
            <div class="about-page">
              
              <div class="AutoSpotoStory">
              <div class="about-details-container">
                <div class="text-container">
                  <div>At AutoSpoto, our story is rooted in the shared passion for music that binds us together. We are a trio of friends whose love for discovering and sharing tunes has always been at the heart of our friendship.</div>
                  <br>
                  <div>However, we felt that the experience of sharing music was inherently flawed. Tunes shared between each other would constantly be lost in the sea of messages.</div>
                  <br>
                  <div>Out of this problem, AutoSpoto emerged as our collective dream project, a manifestation of our desire to make music sharing seamless, spontaneous, and deeply personal.</div>
                  <br>
                  
                  <div class="about-ending">
                  <div class="lads-image">
                    <img src="@/assets/lads.png">
                </div>
                <div class="autospoto-signature">-The AutoSpoto Team</div>
              </div>
                </div>

              </div>
              <!-- <p class="how-it-works-p">Once given permission, AutoSpoto scans the chat.db SQLite database on your mac to find valid Spotify links shared in iMessage or SMS chats.
                 Users can view all the Spotify songs they've sent to contacts and create playlists based on specific chats. 
                 To keep playlists up-to-date, a LaunchAgent refreshes the playlist when a new song is shared within a tracked playlist. </p> -->
          </div>
          <div class = "IFrame-Spotify">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7KfBHdVQiSRJCQp5ejXhgj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
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
    },
    openEmail() {
      window.location = "mailto:autospoto.official@gmail.com";
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
    font-size: 33pt;
  }

  .auto-spoto-subtitle {
    color: white;
    font-family: JosefinSansRegular;
    font-size: 18pt;
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
    padding-left: 50px;
    padding-right:50px;
    padding-bottom: 150px;

  }
  .section__text__p1{
    font-family: JosefinSansSemiBold;
  }

    .about-details-container{
      background-color: rgb(64, 63, 63);
      font-family: JosefinSansRegular;
      border-radius: 15px;
      padding: 15px;
    }
  .lads-image{
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  clip-path: circle();
  width: 100px;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  }img {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
  float: left;
}
.autospoto-signature{
  float:right;
}
.about-ending{
  display: flex;
  align-items:center;
  gap: 10px;
}
  .about-page {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 100px;
    justify-content: baseline;
  }
  
  .text-container{
    width:fit-content;
    height:auto;
    display: inline-block;
  }

  
  .section__text__p1 {
    text-align: left;
    font-size: 2rem;
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
