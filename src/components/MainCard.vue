<template>
    <div class="main-container">
        <h1>AutoSpoto</h1>
        <h2>Coming July 2023</h2>
        <a :href="dmgFileUrl" download="AutoSpoto-Download.dmg">
      <button>Download DMG</button>
    </a>
    </div>
</template>

<script>
export default {
 methods: {
    downloadDmg() {
      
      const dmgFileUrl = 'https://autospoto.xyz/AutoSpoto-Download.dmg';
      console.log(dmgFileUrl)
      const downloadLink = document.createElement('a');
      downloadLink.href = dmgFileUrl;
      downloadLink.setAttribute('download', 'AutoSpoto-Download.dmg');

      // Trigger the click event on the anchor to initiate the download.
      downloadLink.click();
    },
  },
}
</script>

<style scoped>
.main-container {
    text-align: center;
    color: white;
    margin-top: 60px;
}

@font-face { 
    font-family: JosefinSansRegular; 
    src: url('JosefinSansRegular.ttf'); 
} 
h1 {
    font-family: JosefinSansRegular
}
h2 {
    font-family: JosefinSansRegular
}

button{
    font-family: JosefinSansRegular
}
</style>