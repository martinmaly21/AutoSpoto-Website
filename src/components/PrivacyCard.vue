<template>
<div class="privacy-card">
    <div class="privacy-title">
        Privacy Policy
    </div>

    <div class="privacy-policy-container">
        <div class="section">
            <div class="section-title">User data</div>
            <div class="section-contents">AutoSpoto does not collect, store or sell any user identifiable data.</div>
        </div>

        <div class="section">
            <div class="section-title">Behavioural data</div>
            <div class="section-contents">AutoSpoto does not collect, store or sell any behavioral data.</div>
        </div>

        <div class="section">
            <div class="section-title">Message data</div>
            <div class="section-contents">AutoSpoto does not collect, store or sell any of your messages. Your messages never leave your device.</div>
        </div>

        <div class="section">
            <div class="section-title">Error reporting</div>
            <div class="section-contents">AutoSpoto uses Firebase for collecting crash data. This may contain device info including OS version, Mac type, and IP Address. The data is only used for fixing AutoSpoto errors. No other analytics are collected.</div>
        </div>

        <div class="section">
            <div class="section-title">Licensing</div>
            <div class="section-contents">AutoSpoto uses Gumroad for checkout and licensing. Please check their privacy policy for data they collect: https://gumroad.com/privacy. AutoSpoto does not handle any payment info.</div>
        </div>
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


.privacy-title {
    text-align: center;
    font-family: JosefinSansBold;
    font-size: 20pt;
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
}

.privacy-policy-container {
    margin: auto;
    max-width: 1200px;
}

.section {
    padding-bottom: 20px;
}

.section-title {
    font-family: JosefinSansSemiBold;
    font-size: 18pt;
    color: white;
}

.section-contents {
    font-family: JosefinSansRegular;
    font-size: 12pt;
    color: white;
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
      }
    },
  };
</script>