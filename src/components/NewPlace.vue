<template>
    <div class="new-place-wrapper">
        <!-- Logo -->
        <div class="logo">
            <img src="/src/assets/picture/logo.png" alt="TripTrek Logo" />
        </div>

        <!-- Navigation Bar -->
        <header class="nav-bar">
            <div class="nav-left">
                <div class="nav-links">
                    <a href="#">Explore</a>
                    <a href="#">Journal</a>
                    <a href="#">About us</a>
                </div>
            </div>
            <div class="nav-right">
                <button class="icon-btn" title="Toggle Theme"><i class="ri-moon-clear-line"></i></button>
                <button class="icon-btn" title="Weather"><i class="ri-moon-cloudy-line"></i></button>
                <button class="login-btn">Login</button>
            </div>
        </header>

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
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const emit = defineEmits(['show-header'])
const cards = [
    { image: 'mountain.jpg' },
    { image: 'temple.jpg' },
    { image: 'sea.jpg' }
];

function handleScroll() {
    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.offsetHeight;

    console.log(`Scroll Y: ${window.scrollY}, Total: ${scrollBottom} / ${docHeight}`); // ✅ log

    if (scrollBottom >= docHeight - 10) {
        console.log('✅ Bottom reached');
        emit('show-header');
    }
}


onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

function getImageUrl(filename) {
    return new URL(`../assets/picture/${filename}`, import.meta.url).href;
}
</script>

<style scoped>
.new-place-wrapper {
    position: relative;
    height: 100vh;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}

/* Logo */
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

/* Navigation */
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

/* Hero Section */
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

/* Image Cards */
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
</style>
