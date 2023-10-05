<template>
  <body>
    <div class="home-page">
      <header class="top-bar">
        <div class="logo-and-title">
          <img class="logo" src="@/components/autospoto-app-icon1.png" alt="AutoSpoto">
          <h1 class="logo-title">AutoSpoto</h1>
        </div>
        <nav class="tabs">
          <div class="tab">About AutoSpoto</div>
          <div class="tab">How It Works</div>
        </nav>
      </header>
      <main class="main-container">
        <h2 class="download-heading">Download AutoSpoto</h2>
        <p><a href="#" class="download-link" @click="downloadDmg">macOS 13</a></p>
        <p><a href="#" class="download-link14" @click="downloadDmg14">macOS 14</a></p>
      </main>
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
    downloadDmg14() {
      const dmgFileUrl = 'https://autospoto.xyz/AutoSpoto14.0.dmg';
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'JosefinSansRegular', sans-serif;
}

.top-bar {
  background-color: #1ed760;
  padding: 20px;
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
  margin-right: 10px;
}

.logo-title {
  font-size: 24px;
  color: rgb(0, 0, 0);
}

.tabs {
  display: flex;
  gap: 30px;
}

.tab {
  font-size: 18px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: color 0.2s ease;
}

.tab:hover {
  color: #149e54;
}

.main-container {
  text-align: center;
  padding: 60px 0;
}

.download-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #1ed760;
}

.download-link {
  font-size: 18px;
  color: #1ed760;
  text-decoration: none;
  transition: color 0.2s ease;
}

.download-link:hover {
  color: #149e54;
}

.download-link14 {
  font-size: 18px;
  color: #1ed760;
  text-decoration: none;
  transition: color 0.2s ease;
}

.download-link14:hover {
  color: #149e54;
}

.main-container p {
  font-size: 18px;
  color: #b3b3b3;
  margin-bottom: 20px;
}
</style>
