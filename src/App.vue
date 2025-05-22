<script setup>
import Province from './components/Province.vue'
import Transportation from './components/Transportation.vue';
import angkor from '@/assets/angkor.jpg'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <router-view />
</template>
<!-- <template> -->
  <!-- <Province
    :image-src="angkor"
    location="Kirirom, Cambodia"
    name="Kompong Speu"
  /> -->

<!-- </template> -->

<!-- <template>
  <div>
     <router-link
      v-if="route.path !== '/choose-transport'"
      to="/choose-transport"
    > -->
      <!-- Go to Choose Transport -->
    <!-- </router-link>
    <router-view />
  </div>
</template> -->
