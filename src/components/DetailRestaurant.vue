<template>
    <div class="hotel-card">
        <div class="card-header">
            <h3>Best Guide Restaurant</h3>
            <i class="bi bi-heart"></i>
        </div>
        <p class="description">
            Promotes handpicked restaurants for the best local dining experiences.Like the others, it includes a brief note and a "More" link for deeper exploration.
        </p>
        <p class="more" @click="goToHotelSelect">More</p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHotelSelect() {
    router.push('/hotel-select')
}
</script>

<style scoped>
.hotel-card {
    border: 3px solid #96DD99;
    border-radius: 16px;
    padding: 1rem;
    width: 240px;
    background-color: white;
    box-shadow: 10 10px 20px rgba(20, 0, 10, 0.14);
    font-family: 'Urbanist', sans-serif;
    position: relative;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
}

.card-header i {
    font-size: 1.2rem;
    color: #222;
}

.description {
    margin: 0.8rem 0;
    font-size: 0.9rem;
    color: #555;
    line-height: 1.4;
}

.more {
    font-weight: bold;
    font-size: 0.95rem;
    text-align: right;
    cursor: pointer;
    color: #00985b;
}
</style>