<template>
    <div class="restaurant-select">
        <!-- Hero Image -->
        <img src="@/assets/picture/phnom-penh.png" alt="Phnom Penh" class="hero-image" />

        <!-- Navigation Bar -->
        <div class="nav-bar">
            <button class="back-button" @click="goBack">←</button>
            <h2 class="page-title">Your Perfect Trip is Waiting For You</h2>
        </div>

        <!-- Restaurant Cards -->
        <div class="restaurant-list">
            <RestaurantCard v-for="(restaurant, index) in restaurants" :key="restaurant.id" :restaurant="restaurant"
                :index="index" />
        </div>

        <!-- Error Message -->
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import RestaurantCard from '@/components/RestaurantCard.vue'

const restaurants = ref([])
const error = ref('')

const goBack = () => history.back()

onMounted(async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/restaurants')
        restaurants.value = res.data.map(restaurant => {
            let images = []

            // Parse if stored as string, otherwise use array directly
            if (typeof restaurant.image === 'string') {
                try {
                    images = JSON.parse(restaurant.image)
                } catch {
                    images = []
                }
            } else if (Array.isArray(restaurant.image)) {
                images = restaurant.image
            }

            // Map to full URL
            const fullImageURLs = images.map(img =>
                img.startsWith('http') ? img : `http://localhost:8000/storage/${img}`
            )

            return {
                ...restaurant,
                image: fullImageURLs
            }
        })
    } catch (err) {
        error.value = '❌ Failed to load restaurants.'
        console.error(err)
    }
})
</script>

<style scoped>
.restaurant-select {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero-image {
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    margin-bottom: 20px;
}

.nav-bar {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-button {
    position: absolute;
    left: 1rem;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.page-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.restaurant-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-message {
    color: red;
    margin-top: 1rem;
}
</style>