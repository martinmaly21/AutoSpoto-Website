<template>
<div class="privacy-card">

</div>
</template>

<style scoped>

.privacy-card {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(59, 59, 59, 1) 35%);
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