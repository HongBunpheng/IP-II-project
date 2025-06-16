<template>
  <div class="city-wrapperr">
    <!-- Left: Description -->
    <div class="city-left">
      <h1>Siem Reap</h1>
      <p>Siem Reap is a popular tourist city in <br>Cambodia, home to the famous Angkor <br>Wat temple.</p>
      <button>more</button>
    </div>

    <!-- Right: Scrollable image slider -->
    <div class="city-right">
      <div class="slider" ref="slider" @scroll="handleScroll">
        <div
          class="slide-img"
          v-for="(img, i) in images"
          :key="i"
          :style="{ backgroundImage: `url(${getImage(img)})` }"
          @mouseover="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
        ></div>
      </div>

      <!-- Dot indicators -->
      <div class="dots">
        <span
          v-for="(img, i) in images"
          :key="i"
          :class="{ active: i === hoveredIndex ?? activeIndex }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const images = [
  'statue.jpg',
  'lake.jpg',
  'monument.jpg',
  'kompot.png',
  'pvh.jpg',
]

const slider = ref(null)
const hoveredIndex = ref(null)
const activeIndex = ref(0)

const getImage = (img) =>
  new URL(`../assets/${img}`, import.meta.url).href

const handleScroll = () => {
  const el = slider.value
  const itemWidth = el.children[0].offsetWidth + 16 // 16 = gap
  const scrollLeft = el.scrollLeft
  const index = Math.round(scrollLeft / itemWidth)
  activeIndex.value = index
}

onMounted(() => {
  nextTick(() => {
    handleScroll()
  })
})
</script>

<style scoped>
.city-wrapperr {
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('@/assets/angkor-bg.png');
  /* border-radius: 20px; */
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 38rem;
  margin: 0 auto;
  color: white;
  /* background-color: red; */

}


.city-left {
  width: 40%;
  padding: 20px;
  display: flex;
  margin-left: 30px;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: left;
  align-items: start;
}

.city-left h1 {
  font-size: 4rem;
  margin-top: 20px;
  font-weight: bold;

  
}

.city-left p {
  margin-top: 5px;
  font-size: 25px;
  line-height: 1.5;
  text-align: start;
  justify-content: left;
  /* align-items: start; */
}

.city-left button {
  width: 16%;
  height: 12%;
  margin-top: 0.9rem;
  background: fff;
  color: black;
  font-weight: bold;
  font-size: 16px;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

.city-right {
  width: 50%;
  position: relative;
}

.slider {
  display: flex;
  margin-top: 6rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;
  scrollbar-width: none;
  background-color: transparent;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slide-img {
  flex: 0 0 auto;
  width: 280px;
  height: 430px;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;
}

.slide-img:hover {
  transform: scale(1.05);
}

.dots {
  display: flex;
  gap: 8px;
  margin-top: 3rem;
  justify-content: start;
  align-items: center;
  justify-items: center;
}

.dots span {
  width: 15px;
  height: 15px;
  background: #ccc;
  border-radius: 50%;
  transition: background 0.3s;
  border: 1px solid black;
  background-color: white;
}

.dots span.active {
  background: #00cc99;
}
</style>
