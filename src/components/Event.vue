<template>
  <div class="event-wrapper">
    <div class="event-header">
      <h2>Upcoming Events</h2>
      <p>Prepare yourself the memorable moments is coming</p>
    </div>

    <div class="event-card">
      <img
        :src="getImage(currentEvent.image)"
        alt="Event"
        class="event-image"
      />

      <div class="event-details">
        <p class="event-location">
          <i class="ri-map-pin-line"></i> {{ currentEvent.location }}
        </p>
        <h3 class="event-title">{{ currentEvent.title }}</h3>
        <p class="event-date">{{ currentEvent.date }}</p>
        <p class="event-desc">{{ currentEvent.description }}</p>
      </div>
    </div>

    <div class="event-dots">
      <span
        v-for="(item, index) in events"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const events = ref([
  {
    image: 'event-water.png',
    title: 'Water Festival',
    location: 'Phnom Penh, Cambodia',
    date: '4 Nov - 6 Nov',
    description:
      "The Water Festival 2025 in Cambodia, held from November 4 to 6, celebrates the Tonle Sap River's flow reversal. It features boat races, fireworks, and festive gatherings, bringing people together to enjoy the vibrant tradition."
  },
  {
    image: 'angkormarathon.jpg',
    title: 'Angkor Marathon',
    location: 'Siem Reap, Cambodia',
    date: '3 Dec',
    description:
      "Run through the ruins of Angkor Wat during Cambodia’s most scenic marathon. Open to all fitness levels, this event raises awareness and funds for child healthcare in Cambodia."
  },
  {
    image: 'seafestival.png',
    title: 'Sea Festival',
    location: 'Kampot, Cambodia',
    date: '21 Dec - 23 Dec',
    description:
      "Celebrate Cambodia's coastal beauty with beach sports, concerts, and seafood festivals. A family-friendly event held annually in one of the seaside provinces."
  }
])

const activeIndex = ref(0)
const currentEvent = computed(() => events.value[activeIndex.value])

const getImage = (img) => new URL(`../assets/${img}`, import.meta.url).href
</script>

<style scoped>
/* Same styles as before */
.event-wrapper {
  padding: 3rem 2rem;
  width: 100%;
  text-align: center;
  background: white;
  /* border-radius: 2rem; */
  /* background: linear-gradient(to bottom, #fff, #e9fdf7); */
}

.event-header h2 {
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #111;
}

.event-header p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 2rem;
}

.event-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.event-image {
  width: 320px;
  height: 260px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow:
    rgba(41, 89, 67, 0.25) 0px 54px 55px,
    rgba(41, 89, 67, 0.12) 0px -12px 30px,
    rgba(41, 89, 67, 0.12) 0px 4px 6px,
    rgba(41, 89, 67, 0.17) 0px 12px 13px,
    rgba(41, 89, 67, 0.09) 0px -3px 5px;
}

.event-details {
  max-width: 500px;
  text-align: left;
}

.event-location {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.event-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.event-date {
  font-size: 0.95rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.event-desc {
  color: #444;
  font-size: 0.92rem;
  line-height: 1.5;
}

.event-dots {
  margin-top: 1.5rem;
}

.event-dots span {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: 0 4px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
}

.event-dots span.active {
  background: #00c99f;
}
</style>
