<script setup>
import { ref } from 'vue'
import Newplace from '@/components/NewPlace.vue';
import Header from '@/components/Header.vue'
// import City from '@/components/City.vue'
// import Budget from '@/components/Budget.vue'
import Event from '@/components/Event.vue'
import Footer from '@/components/Footer.vue'

const showHeader = ref(false)
</script>

<template>
    <div class="landing-page">
        <Newplace @show-header="() => { console.log('🔥 header signal'); showHeader = true }" />


        <!-- Animated Header -->
        <transition name="fade">
            <Header v-if="showHeader" />
        </transition>

        <!-- City Section -->
        <div class="city-wrapper">
            <div class="city-section">
                <h1 class="title">City And Destination are waiting for you</h1>
                <h2 class="subtitle">WHY HESITATING</h2>
                <div class="newcity-section">
                    <City />
                    <Budget />
                </div>
            </div>
        </div>

        <!-- Event Section -->
            <Event />

        <!-- Footer Section -->
        <router-view />
        <Footer />
    </div>
</template>

<style scoped>
.landing-page {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
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
    justify-content: space-between;
    align-items: center;
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

/* City Section with background image */
.city-wrapper {
    background-image: url('/src/assets/Background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 3rem 1rem;
    color: black;
    /* background-color: pink; */

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

/* Responsive */
@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 1.8rem;
    }

    .card-container {
        flex-direction: column;
        height: auto;
    }

    .card-container>* {
        height: 33vh;
    }

    .nav-bar {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }

    .nav-links {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>