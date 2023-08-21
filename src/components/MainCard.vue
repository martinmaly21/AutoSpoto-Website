<template>
    <body>
    <div class="home-page">
      <div class="top-bar">
        <div class="logo-and-title">
        <img class="logo" src="@/components/autospoto-app-icon1.png" alt="AutoSpoto">
        <h1 class="logo-title">AutoSpoto</h1>
      </div>
        <div class="tabs">
          <div class="tab">About AutoSpoto</div>
          <div class="tab">How It Works</div>
        </div>
      </div>
      <div class="main-container">
        <h2 class="download-heading">Download AutoSpoto</h2>
        <p><a href="#" class="download-link" @click="downloadDmg">macOS (versions 13.0+)</a></p>
      </div>
    </div>
    </body>
  </template>

<script>
export default {
  methods: {
    downloadDmg() {
      const dmgFileUrl = 'https://autospoto.xyz/AutoSpoto-Download.dmg';
      const downloadLink = document.createElement('a');
      downloadLink.href = dmgFileUrl;
      downloadLink.setAttribute('download', 'AutoSpoto-Download.dmg');
      downloadLink.click();
    },
  },
}
</script>

<style scoped>


*, html, template {
    margin:0;
    padding:0;  
}

body{
    margin:0;
    padding: 0;
}
.top-bar {
  background-color: #1ed760; /* Spotify green */
  margin: 0 auto 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-and-title {
  display: flex;
  align-items: center;
}

.logo {
  max-width: 75px;
  height: auto;
  border-radius: 8px;
  margin-right: 10px; /* Add margin to separate from the title */

}

.logo-title {
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 24px;
  color: rgb(0, 0, 0);
}
.tabs {
  display: flex;
  gap: 30px;
  margin-right: 100px;
}

.tab {
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 24px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: color 0.2s ease;
}

.tab:hover {
  color: #149e54;
}

.main-container {
  text-align: center;
  color: #1ed760; /* Spotify green */
  padding: 60px 0;
}

.download-heading {
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
  color: #1ed760;
}

.download-link {
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 18px;
  color: #1ed760;
  text-decoration: none;
  transition: color 0.2s ease;
}

.download-link:hover {
  color: #149e54;
}

.main-container p {
  font-family: 'JosefinSansRegular', sans-serif;
  font-size: 18px;
  color: #b3b3b3;
  margin-bottom: 20px;
}

</style>
