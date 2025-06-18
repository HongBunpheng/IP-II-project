<template>
  <div id="app" class="app-container">
    <Header />
    <!-- Uncomment any component below to activate -->
    <!-- <Review /> -->
    <!-- <Receipt /> -->
    <!-- <HotelCard /> -->
    <!-- <ChatBot /> -->
    <!-- <Back />
    <CreatePost />
    <KhmerEventCalendar />
    <Map />
    <Search />
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

<script>
import Header from './components/Header.vue';
import Receipt from './components/Receipt.vue';
import Review from './components/Review.vue';
import HotelCard from './components/HotelCard.vue';
// import ChatBot from './components/chatBot.vue';
import Back from './components/Back.vue';
import CreatePost from './components/CreatePost.vue';
import KhmerEventCalendar from './components/KhmerEventCalendar.vue';
import Map from './components/Map.vue';
import Search from './components/search.vue';
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
    Receipt,
    Review,
    HotelCard,
    // ChatBot,
    Back,
    CreatePost,
    KhmerEventCalendar,
    Map,
    Search,
    JournalBox,
    Auth,
    Notification,
    Weather,
    Transportation,
    Province
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f7f7;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
