<template>
    <div v-for="(hotel, index) in hotels" :key="hotel.id" class="hotel-card">
        <!-- LEFT: Hotel Info -->
        <div class="hotel-info">
            <h2 class="hotel-title">{{ hotel.name }}</h2>
            <p class="hotel-description">{{ hotel.details }}</p>
            <div class="hotel-footer">
                <button class="details-btn" @click="goToDetail(hotel.id)">details</button>
                <div class="stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= hotel.rating }">★</span>
                </div>
            </div>
        </div>

        <!-- RIGHT: Overlapping Images -->
        <div class="hotel-images" v-if="hotel.image?.length >= 2">
            <img :src="hotel.image[1]" class="img back" alt="Hotel Image 2" />
            <img :src="hotel.image[0]" class="img front" alt="Hotel Image 1" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const emit = defineEmits(['hotelNamesLoaded'])
const hotels = ref([])
const router = useRouter()

onMounted(async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/hotels')
        hotels.value = res.data.map(hotel => ({
            ...hotel,
            image: hotel.image.map(img =>
                img.startsWith('http') ? img : `http://localhost:8000/storage/${img}`
            )
        }))

        // Emit hotel names to parent
        const hotelNames = hotels.value.map(h => h.name)
        emit('hotelNamesLoaded', hotelNames)
    } catch (err) {
        console.error('❌ Failed to load hotels:', err)
    }
})

const goToDetail = (id) => {
    router.push(`/hotel/${id}`)
}
</script>

<style scoped>
/* styles same as yours */
.hotel-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e3e3e3;
    border-radius: 20px;
    padding: 20px;
    gap: 30px;
    max-width: 1000px;
    width: 90%;
    font-family: 'Arial', sans-serif;
    flex-wrap: wrap;
}

.hotel-info {
    flex: 1 1 300px;
    min-width: 0;
}

.hotel-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #111;
}

.hotel-description {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
    color: #333;
}

.hotel-footer {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.details-btn {
    background-color: #00c4b3;
    color: black;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-weight: bold;
    cursor: pointer;
}

.stars {
    display: flex;
    gap: 5px;
}

.star {
    font-size: 18px;
    color: #ccc;
}

.star.filled {
    color: #f5b700;
}

.hotel-images {
    position: relative;
    width: 100px;
    height: 280px;
    flex-shrink: 0;
}

.img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.back {
    top: 20px;
    left: 20px;
    z-index: 1;
    transform: scale(0.95);
}

.front {
    top: 0;
    left: 0;
    z-index: 2;
}

@media (max-width: 768px) {
    .hotel-card {
        flex-direction: column;
        text-align: center;
        padding: 16px;
    }

    .hotel-images {
        width: 90%;
        height: 200px;
        margin-top: 20px;
    }

    .img {
        width: 100%;
        height: 100%;
    }
}
</style>