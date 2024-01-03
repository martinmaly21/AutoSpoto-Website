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
          <li>
            <a @click="scrollToSection('story')">Story</a>
          </li>
          <li>
            <a @click="scrollToSection('how-it-works')">How it works?</a>
          </li>
          <li>
            <a @click="openEmail()">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main-card">
      <class class="auto-spoto-logo-container">
        <img class="auto-spoto-logo" src="@/assets/autospoto-app-icon1.png" alt="AutoSpoto logo">
      </class>
      <class class="auto-spoto-title">AutoSpoto</class>
      <class class="auto-spoto-subtitle">Never lose a recommended song again.</class>
      <div class="video-container">
        <video class="video" autoplay>
          <source src="FinalDisplayAutoSpoto.mov" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>
      <button class="download-btn" @click="downloadDmg" target="_blank"> Download now </button>
      <class class="download-extra-info">Requires macOS 13.0 or later</class>
    </div>
    <hr />
    <div class="story-card" id="story">
      <p class="section__text__p1">Music is meant to be shared</p>
      <div class="story-page">
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
        <div class="IFrame-Spotify">
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7KfBHdVQiSRJCQp5ejXhgj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <hr />
    <div class="how-it-works-card" id="how-it-works">
      <p class="section__text__p1">The missing link between Spotify and Apple</p>
      <div class="how-it-works-page">
        <div class="steps-container">
          <div class="step-container">
            <div class="number-background-circle">
              <div class="number">1</div>
            </div>
            <div class="step-text-container">
              <div class="step-title">Download AutoSpoto</div>
              <div class="step-subtitle">AutoSpoto is currenlty compatible with MacOS 13.0 and above.</div>
            </div>
          </div>
          <div class="step-container">
            <div class="number-background-circle">
              <div class="number">2</div>
            </div>
            <div class="step-text-container">
              <div class="step-title">Connect your iMessages and Spotify to AutoSpoto on your Mac</div>
              <div class="step-subtitle">AutoSpoto is fully local, and your messages will never leave your computer.</div>
            </div>
          </div>
          <div class="step-container">
            <div class="number-background-circle">
              <div class="number">3</div>
            </div>
            <div class="step-text-container">
              <div class="step-title">Browse your iMessage chats in AutoSpoto</div>
              <div class="step-subtitle">The iMesssage chats will be reduced to only contain tracks sent in each chat.</div>
            </div>
          </div>
          <div class="step-container">
            <div class="number-background-circle">
              <div class="number">4</div>
            </div>
            <div class="step-text-container">
              <div class="step-title">Connect an iMessage chat to a playlist</div>
              <div class="step-subtitle">You will have the option to name the playlist.</div>
            </div>
          </div>
          <div class="step-container">
            <div class="number-background-circle">
              <div class="number">5</div>
            </div>
            <div class="step-text-container">
              <div class="step-title">Listen to your playlist!</div>
              <div class="step-subtitle">Your playlist will contain every Spotify track that has ever been sent in that chat, and will automatically update whenever future tracks are shared within the chat.</div>
            </div>
          </div>
        </div>
        <div class="spotify-apple-photo-holder">
          <img class="spotify-apple-photo" src="@/assets/apple-spotify-logo.png" alt="Apple/Spotify logo">
        </div>
      </div>
    </div>
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

        <div class="privacy" @click="openPrivacy()">
          Privacy
        </div>

        <div class="eula" @click="openEULA()">
            EULA
        </div>
      </div>
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
      },
      openMartinMalyGithub() {

      },
      openAndrewCaravaggioGithub() {

      },
      openPrivacy() {

      },
      openEULA() {
        
      }
    },
  };
</script>
<style scoped>
  .number {
    font-family: JosefinSansBold;
    font-size: 16pt;
    background-color: rgb(64, 63, 63);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
  }

  .step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }

  .step-text-container {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  .step-title {
    font-family: JosefinSansSemiBold;
    font-size: 12pt;
  }

  .step-subtitle {
    font-family: JosefinSansThin;
    font-size: 12pt;
  }

  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 35%);
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
    margin-left: 20px;
    margin-right: 20px;
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
    text-align: center;
  }

  .video-container {
    max-width: 50%;
    /* Adjust the percentage as needed */
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
    margin-top: 20px;
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
    padding-right: 50px;
    padding-bottom: 110px;
    max-width: 1200px;
    margin: auto;
  }

  .section__text__p1 {
    font-family: JosefinSansSemiBold;
  }

  .about-details-container {
    background-color: rgb(64, 63, 63);
    font-family: JosefinSansRegular;
    border-radius: 15px;
    padding: 15px;
  }

  .lads-image {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    clip-path: circle();
    width: 100px;
    height: 100px;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
  }

  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
    float: left;
  }

  .autospoto-signature {
    float: right;
  }

  .about-ending {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .story-page {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 100px;
    justify-content: baseline;
  }

  .text-container {
    width: fit-content;
    height: auto;
    display: inline-block;
  }

  .section__text__p1 {
    text-align: left;
    font-size: 2rem;
  }

  .how-it-works-card {
    color: white;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 110px;
    max-width: 1200px;
    margin: auto;
  }

  .how-it-works-page {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 100px;
    justify-content: baseline;
  }

  .spotify-apple-photo-holder {
    aspect-ratio:  1/1;
    max-height: 450px;
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

  @media screen and (max-width: 1000px) {

    #contact,
    footer {
      height: 40vh;
    }

    #profile {
      height: 83vh;
      margin-bottom: 0;
    }

    .nav-links li a {
      font-size: 1rem;
    }

    .story-page {
      grid-template-columns: 1fr;
    }

    .how-it-works-page {
      grid-template-columns: 1fr;
    }
  }
</style>