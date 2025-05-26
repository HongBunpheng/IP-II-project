<script setup>
import Province from './components/Province.vue'
import Transportation from './components/Transportation.vue';
import angkor from '@/assets/angkor.jpg'
import Newplace from './components/Newplace.vue';
import LandingPage from './views/Landingpage.vue';
// import City from './components/City.vue';
// import Budget from './components/Budget.vue';
// import Event from './components/Event.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <router-view />
  <Landingpage/>
  <Newplace/>
  <City/>
  <Budget/>
  <Event/>
</template>
