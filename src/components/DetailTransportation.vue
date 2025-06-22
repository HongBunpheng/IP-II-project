<template>
    <div class="hotel-card">
        <div class="card-header">
            <h3>Enjoy Transportation</h3>
            <i class="bi bi-heart"></i>
        </div>
        <p class="description">
            Highlights transportation services available for a smooth journey. A consistent design with a short text and
            an interactive "More" link is used.
        </p>
        <p class="more" @click="router.push('/choose-transport')">More</p>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToTransportation() {
    router.push('/transportation')
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