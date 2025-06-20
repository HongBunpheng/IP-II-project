<template>
  <div class="city-slider">
    <!-- Current background -->
    <div class="background" :style="{ backgroundImage: `url(${currentBackground})` }"></div>

    <!-- Animated background -->
    <div
      v-if="animating"
      class="background background-next"
      :style="{ backgroundImage: `url(${nextBackground})` }"
      @animationend="onAnimationEnd"
    ></div>

    <!-- Text and More Button -->
    <div class="bg-content" :key="index">
      <div class="name">{{ allItems[index].title }}</div>
      <div class="des">{{ allItems[index].description }}</div>
      <button class="button">More</button>
    </div>

    <!-- Thumbnails -->
    <div class="container">
      <div class="slide">
        <div
          v-for="(item, i) in visibleItems.slice(1, 6)"
          :key="i"
          class="item"
          :style="getStyle(i)"
          @click="goToSlide((index + i + 1) % allItems.length)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const allItems = [
  {
    title: 'Angkor Wat Temple',
    description: 'The world’s largest religious monument, a symbol of Cambodia’s history and culture.',
    image: new URL('../assets/a1.jpg', import.meta.url).href
  },
  {
    title: 'Royal Palace',
    description: 'A stunning complex in Phnom Penh that serves as the royal residence of the King of Cambodia.',
    image: new URL('../assets/a2.jpg', import.meta.url).href
  },
  {
    title: 'Bokor National Park',
    description: 'A lush escape in the mountains featuring cool weather, waterfalls, and colonial ruins.',
    image: new URL('../assets/a3.jpg', import.meta.url).href
  },
  {
    title: 'Preah Thorng Neang Neak Roundabout',
    description: 'A symbolic statue depicting a famous Khmer legend, located in the heart of Kep.',
    image: new URL('../assets/a4.jpg', import.meta.url).href
  },
  {
    title: 'National Museum',
    description: 'Home to thousands of ancient Khmer artifacts and rich Cambodian heritage.',
    image: new URL('../assets/a5.png', import.meta.url).href
  },
  {
    title: 'Preah Vihear Temple',
    description: 'A breathtaking cliffside temple with panoramic views, rich in spiritual history.',
    image: new URL('../assets/a6.jpg', import.meta.url).href
  },
  {
    title: 'Koh Songsa',
    description: 'A luxury private island in the Gulf of Thailand known for clear waters and tranquility.',
    image: new URL('../assets/a7.jpg', import.meta.url).href
  }
];


const index = ref(0)
const currentBackground = ref(allItems[0].image)
const nextBackground = ref('')
const animating = ref(false)

const visibleItems = computed(() => {
  const result = []
  for (let i = 0; i < 6; i++) {
    result.push(allItems[(index.value + i) % allItems.length])
  }
  return result
})

const goToSlide = (target) => {
  if (animating.value || target === index.value) return
  index.value = target
  nextBackground.value = allItems[target].image
  animating.value = true
}

const onAnimationEnd = () => {
  currentBackground.value = nextBackground.value
  animating.value = false
}

const getStyle = (i) => {
  const gap = 240
  return {
    left: `calc(50% + ${i * gap}px)`,
    backgroundImage: `url(${visibleItems.value[i + 1]?.image})`,
  }
}
</script>

<style scoped>
.city-slider {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #000;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: 0;
  filter: brightness(0.9);
}

.background::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0));
  z-index: 1;
}

.background-next {
  z-index: 1;
  animation: fadeInZoom 0.8s ease-in-out forwards;
}

@keyframes fadeInZoom {
  from {
    opacity: 0;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.bg-content {
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  text-align: left;
  max-width: 400px;
}

.bg-content .name {
  font-size: 48px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 8px;
  animation: fadeText 0.5s ease forwards;
}

.bg-content .des {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.9;
  animation: fadeText 0.5s ease 0.1s forwards;
}

.bg-content .button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  animation: fadeText 0.5s ease 0.2s forwards;
  transition: all 0.3s ease;
}

.bg-content .button:hover {
  background-color: #0c9272;
  color: white;
}

@keyframes fadeText {
  from {
    opacity: 1;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  position: relative;
  z-index: 3;
  width: 1400px;
  height: 600px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}

.slide {
  position: relative;
  width: 90%;
  height: 100%;
}

.item {
  width: 220px;
  height: 350px;
  position: absolute;
  top: 50%;
  gap: 20px;
  transform: translate(0, -50%);
  border-radius: 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.25);
  transition: left 0.5s ease, transform 0.4s ease;
  cursor: pointer;
  backdrop-filter: blur(3px);
  overflow: hidden;
  margin-left: 10px;
}
</style>

