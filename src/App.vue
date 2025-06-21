<<<<<<< HEAD
<script setup>
import Province from './components/Province.vue'
import Transportation from './components/Transportation.vue';
// import angkor from '@/assets/angkor.jpg'
import Newplace from './components/Newplace.vue';
// import Budget from './components/Budget.vue';
// import Event from './components/Event.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <router-view />
  <Newplace/>
  <City/>
  <Budget/>
  <Event/>
</template>
=======
<template>
  <div>
    <Header />
    <router-view />
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
}
</style>



>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
