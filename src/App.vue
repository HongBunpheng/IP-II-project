  <script>
import Header from './components/Header.vue';
import Receipt from './components/Receipt.vue';
import Review from './components/Review.vue';
import HotelCard from './components/HotelCard.vue';
import Footer from './components/Footer.vue';
// import ChatBot from './components/chatBot.vue';
import Back from './components/Back.vue';
import CreatePost from './components/CreatePost.vue';
import KhmerEventCalendar from './components/KhmerEventCalendar.vue';
import Map from './components/Map.vue';
import search from './components/search.vue';
import JournalBox from './components/JournalBox.vue';
import Auth from './components/Auth.vue';
import Notification from './components/Notification.vue';
import Weather from './components/Weather.vue';
import Transportation from './components/Transportation.vue';
import Province from './components/Province.vue';



  export default {
    name: 'App',
    components: {
      Header,
      Review,
      HotelCard,
      Receipt,
      Footer,
      // ChatBot,
      Back,
      CreatePost,
      KhmerEventCalendar,
      Map,
      search,
      JournalBox,
      Auth,
      Notification,
      Weather,
      Transportation,
      Province,

    }
  }
</script>

<template>
  <div id="app" class="app-container">
    <Header />
    <!-- <review /> -->
    <!-- <Receipt /> -->
    <!-- <hotelCard /> -->
    <!-- <ChatBot /> -->
    <!-- <Back />
    <CreatePost />
    <KhmerEventCalendar />
    <Map />
    <search />
    <JournalBox /> -->
    <!-- <Auth /> -->
    <!-- <Notification />
    <Weather /> -->
    <!-- <Transportation />
    <Province /> -->
    <router-view />
    <!-- <Footer /> -->
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



