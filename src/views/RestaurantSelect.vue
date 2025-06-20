<template>
  <div class="restaurant-select">
    <!-- Hero Image -->
    <img src="@/assets/picture/phnom-penh.png" alt="Phnom Penh" class="hero-image" />

    <!-- Navigation Bar -->
    <div class="nav-bar">
      <button class="back-button" @click="goBack">←</button>
      <h2 class="page-title">Your Perfect Trip is Waiting For You</h2>
    </div>

    <!-- Restaurant Cards (reusing HotelCard) -->
    <div class="restaurant-list">
      <HotelCard
        v-for="(restaurant, index) in restaurants"
        :key="restaurant.id"
        :hotel="restaurant"
        :index="index"
      />
    </div>

    <!-- Error Message -->
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import HotelCard from '@/components/HotelCard.vue' // reused card

const restaurants = ref([])
const error = ref('')
const router = useRouter()

const goBack = () => router.back()

// 🔽 Replace this block with debug version
onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/restaurants`)
    
    // ✅ Debugging line
    console.log('✅ API Response:', response.data)

    restaurants.value = response.data.map(restaurant => ({
      ...restaurant,
      rating: Number(restaurant.rating),
      image: Array.isArray(restaurant.image)
        ? restaurant.image
        : JSON.parse(restaurant.image || '[]')
    }))
  } catch (err) {
    console.error('❌ Error loading restaurants:', err)
    error.value = 'Could not load restaurant data. Please try again later.'
  }
})
</script>

<style scoped>
.restaurant-select {
  font-family: 'Urbanist', sans-serif;
  background-color: white;
}

.hero-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  display: block;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  flex-wrap: wrap;
}

.back-button {
  position: absolute;
  left: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
}

.page-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  flex: 1;
}

.restaurant-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
}

.error-message {
  text-align: center;
  color: red;
  font-weight: 500;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.1rem;
  }

  .hero-image {
    max-height: 180px;
  }

  .back-button {
    font-size: 1.6rem;
  }
}
</style>
