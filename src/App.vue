<script setup>
import Province from './components/Province.vue'
import Transportation from './components/Transportation.vue';
import angkor from '@/assets/angkor.jpg'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<!-- <template>
  <Province
    :image-src="angkor"
    location="Kirirom, Cambodia"
    name="Kompong Speu"
  />
  <Transportation
  departure-time="11:00 PM"
    departure-city="Phnom Penh"
    arrival-time="3:00 AM"
    arrival-city="Siem Reap"
    :price="11"
    distance="700km"
    travel-time="6h"/>
</template> -->

<template>
  <div>
     <router-link
      v-if="route.path !== '/choose-transport'"
      to="/choose-transport"
    >
      <!-- Go to Choose Transport -->
    </router-link>
    <router-view />
  </div>
</template>
