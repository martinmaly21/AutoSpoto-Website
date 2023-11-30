
<template>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
    <body>
    <nav id="desktop-nav">
         <div class="logo">AutoSpoto</div>
         <div>
            <ul class="nav-links">
                <li><a @click="scrollToSection('download')">Download</a></li>
                <li><a @click="scrollToSection('about')">About the Project</a></li>
            </ul>
         </div>
    </nav>

    <nav id ="minimal-view">
        <div class="logo">AutoSpoto</div>
    </nav>

    <section id="profile">
            <div class="video-container">
              <video class="video" controls>
              <source src="@/assets/FinalDisplayAutoSpoto.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
      </div>
          </section>
          <section id="download">
            <p class="section__text__p1">Download</p>
            <div class="download_page">
            <div class="combined-button-container">
            <div class="btn-container">
                    <button
                      class="btn btn-color download-btn" @click="downloadDmg" target="_blank"
                    >
                      Download for MacOS 13.0 +
                    </button>
            </div>
            <div class="btn-container">
                    <button
                      class="btn btn-color download-btn"
                      @click="downloadDmg14" target="_blank"
                    >
                      Download for MacOS 14.0 +
                    </button>
            </div>
          </div>
          <div class="Technical-Description">
              <h1 class="how-it-works">How it Works</h1>
              <p class="how-it-works-p">Once given permission, AutoSpoto scans the chat.db SQLite database on your mac to find valid Spotify links shared in iMessage or SMS chats.
                 Users can view all the Spotify songs they've sent to contacts and create playlists based on specific chats. 
                 To keep playlists up-to-date, a LaunchAgent refreshes the playlist when a new song is shared within a tracked playlist. </p>
          </div>
        </div>
          </section>
          <section id="about">
            <p class="section__text__p1">About</p>
            <div class="section-container">
              <div class="section__pic-container">
                <img
                  src="../assets/lads.png"
                  alt="Profile picture"
                  class="about-pic"
                />
              </div>
              <div class="about-details-container">
                <div class="text-container">
                  <p>
                    At AutoSpoto, our story is rooted in the shared passion for music that binds us together. 
                    We are a trio of friends whose love for discovering and sharing tunes has always been at the heart of our friendship. 
                    Born out of this shared enthusiasm, AutoSpoto emerged as our collective dream project, a manifestation of our desire to make music sharing seamless, spontaneous, and deeply personal.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </body>
</template>

<!-- ...rest of your code remains the same -->


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
    downloadDmg14() {
      const dmgFileUrl = 'https://autospoto.xyz/AutoSpoto14.0.dmg';
      const link = document.createElement('a');
      link.href = dmgFileUrl;
      link.target = '_blank'; // Open in a new tab/window
      link.download = 'AutoSpoto14.0.dmg'; // Set the default download file name
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

  
  /* TRANSITION */
  
  a, .btn {
    transition: all 300ms ease;
  }
body {
    margin: 0;
    padding: 0;
    font-family: 'JosefinSansRegular', sans-serif;
    scroll-behavior: smooth;
}

/* Navigation */
nav, .nav-links {
    display: flex;
  }
  
  nav {
    justify-content: space-around;
    align-items: center;
    height: 17vh;
    scroll-behavior: smooth;
  }
  
  .nav-links {
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
    scroll-behavior: smooth;
  }
  
  a {
    color: black;
    text-decoration: none;
    text-decoration-color: white;
    cursor: pointer;
  }
  
  a:hover {
    color: rgb(56, 210, 17);
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(56, 210, 17);
    cursor: pointer;
  }

  .logo {
    font-size: 2rem;
  }
  
  .logo:hover {
    cursor: default;
  }

  section {
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
    min-height: fit-content;
  }

  /* PROFILE SECTION */
  
  #profile {
    display: flex;
    gap: 5rem;
    height: 80vh;
  }
  
  .section__pic-container {
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 0;
  }  
  .profile-pic{
    border-radius: 4rem;
  }
.video-container {
  max-width: 70%; /* Adjust the percentage as needed */
  width: 100%; 
  margin-left: auto;
  margin-right: auto;
}

.video {
  width: 100%;
  height: auto;
}
  /* DOWNLOAD SECTION */
  
  /* Buttons */

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 10rem;
    height: 10vh;
  }
  
  .btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
  }
  
  .btn-color {
    margin-top:20px;
    border: rgb(53, 53, 53) 0.1rem solid;
  }
  
  .btn-color:hover {
    cursor: pointer;
  }

  .btn-color:hover {
    background: rgb(53, 53, 53);
    color: white;
  }

#download{
  position: relative;
}
  .combined-button-container{
    display: inline;
  }

  .download_page{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
  }
  .how-it-works{
    text-align: center;
  }
  .Technical-Description{
    width: 50%;
  }

/* About Section */
#about {
    position: relative;
    scroll-behavior: smooth;
  }  
  .about-details-container {
    justify-content: center;
    flex-direction: row;
  }
  

  .about-details-container {
    display: flex;
  }
  
  .about-pic {
    border-radius: 2rem;
  }

  .section-container {
    gap: 10rem;
    height: 80%;
  }


  .section-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  
  .section__pic-container {
    height: 300px;
    width: 300px;
    margin: auto 0;
    
  }
  .text-container{
    width:auto;
    height:auto;
  }

  
  .section__text__p1 {
    text-align: center;
    font-size: 2rem;
  }

  @media screen and (max-width: 1600px) {
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
