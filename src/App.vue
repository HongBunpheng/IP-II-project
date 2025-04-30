  <script>
import Header from './components/Header.vue';
import Receipt from './components/Receipt.vue';
import Review from './components/Review.vue';
import HotelCard from './components/HotelCard.vue';
import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Review,
      HotelCard,
      Receipt,
      Footer,
    }
  }
</script>

<template>
  <div id="app" class="app-container">
    <!-- <Header /> -->
    <!-- <review /> -->
    <!-- <Receipt /> -->
    <!-- <hotelCard /> -->
    <router-view />
    <Footer />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}


.app-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>



