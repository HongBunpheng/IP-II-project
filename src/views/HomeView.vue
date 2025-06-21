<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from '@/components/Header.vue'
import City from '@/components/City.vue'
import Budget from '@/components/Budget.vue'
import Event from '@/components/Event.vue'

const showHeader = ref(false)

const cards = [
    { image: 'mountain.jpg' },
    { image: 'temple.jpg' },
    { image: 'sea.jpg' }
]

function getImageUrl(filename) {
    return new URL(`../assets/picture/${filename}`, import.meta.url).href
}

function handleScroll() {
    showHeader.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="landing-page">
        <Header :class="{ 'header-visible': showHeader }" />

        <!-- Hero Section + Logo + Navigation -->
        <div class="new-place-wrapper">
            <!-- Hero Text -->
            <div class="hero-text">
                <h1>
                    Discover New Places and Create<br />
                    Unforgettable Memories<br />
                    together
                </h1>
            </div>

            <!-- Image Cards -->
            <div class="card-container">
                <div class="new-place-card" v-for="(card, index) in cards" :key="index">
                    <img :src="getImageUrl(card.image)" :alt="card.label" class="place-image" />
                    <div class="place-overlay">
                        <span class="label">{{ card.label }}</span>
                        <span class="arrow"><i class="ri-arrow-right-line"></i></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- City Section -->
        <div class="city-wrapper">
            <div class="city-section">
                <h1 class="title">City And Destination are waiting for you</h1>
                <h2 class="subtitle">WHY HESITATING</h2>
                <div class="newcity-section">
                    <City />
                </div>
            </div>
        </div>

        <!-- Budget Section -->
        <Budget />

        <!-- Event Section -->
        <Event />
    </div>
</template>

<style scoped>
.landing-page {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: white;
}

/* Hero / Newplace merged section */
.new-place-wrapper {
    position: relative;
    height: 90vh;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}

.logo {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 25;
}

.logo img {
    height: 4.5rem;
    margin-top: 8px;
    object-fit: contain;
    filter: brightness(0) invert(1);
}

.nav-bar {
    position: absolute;
    top: 20px;
    left: 30px;
    right: 30px;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.nav-links {
    display: flex;
    gap: 7.5rem;
    font-size: 1.2rem;
    margin-top: 20px;
}

.nav-links a {
    font-weight: bold;
    font-size: 22px;
    color: white;
    text-decoration: none;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: white;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.icon-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
}

.login-btn {
    background: white;
    color: black;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 6px 18px;
    cursor: pointer;
}

.hero-text {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
}

.hero-text h1 {
    font-size: 2.5rem;
    font-weight: bold;
}

/* Card images */
.card-container {
    display: flex;
    height: 100vh;
}

.card-container>* {
    flex: 1;
}

.new-place-card {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.place-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.place-overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.label {
    position: relative;
    bottom: 6rem;
    color: white;
    font-size: 2.8rem;
}

.arrow {
    position: absolute;
    left: 27rem;
    bottom: 30px;
    color: white;
    font-size: 3rem;
}

/* City Section */
.city-wrapper {
    background-image: url('/src/assets/Background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 3rem 1rem;
    color: black;
}

.city-section {
    text-align: center;
}

.city-section .title {
    font-size: 2rem;
    font-weight: bold;
}

.city-section .subtitle {
    color: #00cc99;
    font-family: 'Brush Script MT', cursive;
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.newcity-section {
    margin-top: 2rem;
    padding: 2rem 0;
}
</style>
