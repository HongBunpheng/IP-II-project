<template>
    <div class="hotel-select">
        <!-- Hero Image -->
        <img src="@/assets/picture/m6.jpg" alt="Phnom Penh" class="hero-image" />

        <!-- Navigation Bar -->
        <div class="nav-bar">
            <button class="back-button" @click="goBack">←</button>
            <h2 class="page-title">Your Perfect Trip is Waiting For You</h2>
        </div>

        <!-- Hotel Cards -->
        <div class="hotel-list">
            <HotelCard v-for="(hotel, index) in hotels" :key="hotel.id" :hotel="hotel" :index="index" />
        </div>

        <!-- Error Message -->
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HotelCard from '@/components/Explorepage/HotelCard.vue'

const baseURL = import.meta.env.VITE_API_BASE_URL

const hotels = ref([])
const error = ref('')

const goBack = () => history.back()

onMounted(async () => {
    try {
        const res = await axios.get(`${baseURL}/api/hotels`)
        hotels.value = res.data.map(hotel => ({
            ...hotel,
            image: hotel.image.map(img =>
                img.startsWith('http') ? img : `${baseURL}/storage/${img}`
            )
        }))
    } catch (err) {
        error.value = '❌ Failed to load hotels.'
        console.error(err)
    }
})
</script>


<style scoped>
.hotel-select {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero-image {
    margin: 0 auto;
    width: 100%;
    height: 70vh;
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

.hotel-list {
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