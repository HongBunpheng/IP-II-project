<template>
  <div>
    <Header />
    <div class="app-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>


<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 120px;
}
</style>



