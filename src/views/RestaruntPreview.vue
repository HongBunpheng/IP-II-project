<template>
  <div class="restaurant-preview" v-if="restaurant">
    <!-- Back Button -->
    <button class="back-btn" @click="router.back()">←</button>

    <!-- Top Section -->
    <div class="top-section">
      <div class="image-stack" v-if="restaurant.image?.length">
        <img
          v-for="(img, i) in restaurant.image.slice(0, 4)"
          :key="i"
          :src="getImageUrl(img)"
          class="stack-img"
          :class="'img-' + i"
        />
      </div>

      <div class="info-section">
        <h1 class="title">{{ restaurant.name }}</h1>
        <div class="price-rating">
          <span class="price-tag">{{ restaurant.price }}</span>
          <div class="stars">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= Number(restaurant.rating) }"
              >★</span
            >
          </div>
        </div>
        <p class="description">{{ restaurant.details }}</p>
        <button class="book-btn">Book Now</button>
      </div>
    </div>

    <!-- Menu Section -->
    <div class="menu-section" v-if="restaurant.menu && restaurant.menu.length">
      <h2 class="menu-title">Discover the Unique Flavors Of Our Menu</h2>
      <div class="menu-gallery">
        <img
          v-for="(dish, i) in restaurant.menu"
          :key="'dish-' + i"
          :src="getImageUrl(dish)"
          class="menu-img"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const restaurant = ref(null)
const route = useRoute()
const router = useRouter()

const getImageUrl = (imgPath) => {
  const base = import.meta.env.VITE_API_BASE_URL.replace('/api', '')
  return imgPath.startsWith('http')
    ? imgPath
    : `${base}/storage/${imgPath.replace(/^\/?uploads\//, 'uploads/')}`
}

onMounted(async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/hotels/${route.params.id}`
    )
    restaurant.value = {
      ...res.data,
      image: Array.isArray(res.data.image)
        ? res.data.image
        : JSON.parse(res.data.image || '[]'),
      menu: Array.isArray(res.data.menu)
        ? res.data.menu
        : JSON.parse(res.data.menu || '[]'),
      rating: Number(res.data.rating)
    }
  } catch (err) {
    console.error('❌ Failed to load restaurant:', err)
  }
})
</script>
.restaurant-preview {
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  position: relative;
}

.back-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.top-section {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 140px;
}

.stack-img {
  border-radius: 24px;
  object-fit: cover;
  width: 140px;
  height: 200px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  margin-top: -60px;
}

.img-0 {
  z-index: 1;
  margin-top: 0;
}
.img-1 {
  z-index: 2;
}
.img-2 {
  z-index: 3;
}
.img-3 {
  z-index: 4;
}

.info-section {
  max-width: 500px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.price-rating {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.price-tag {
  background-color: #fdd835;
  color: black;
  padding: 5px 12px;
  border-radius: 6px;
  font-weight: bold;
}

.stars {
  display: flex;
  gap: 3px;
}

.star {
  color: #ccc;
  font-size: 18px;
}

.star.filled {
  color: #f5b700;
}

.description {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.book-btn {
  background-color: #00c4b3;
  color: white;
  padding: 12px 20px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.menu-section {
  margin-top: 3rem;
  text-align: center;
}

.menu-title {
  font-family: 'Caveat', cursive;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.menu-gallery {
  background-color: #ddd;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  justify-content: center;
  border-radius: 10px;
}

.menu-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
