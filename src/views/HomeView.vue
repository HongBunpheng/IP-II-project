<template>
    <div class="landing-page">
        <!-- === NewPlace Section === -->
        <div class="new-place-wrapper">
            <div class="logo">
                <img src="/src/assets/picture/logo.png" alt="TripTrek Logo" />
            </div>

            <div class="hero-text">
                <h1>
                    Discover New Places and Create<br />
                    Unforgettable Memories<br />
                    together
                </h1>
            </div>

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

        <!-- === City Section === -->
        <div class="city-wrapper">
            <div class="city-section">
                <h1 class="title">City And Destination are waiting for you</h1>
                <h2 class="subtitle">WHY HESITATING</h2>
                <div class="newcity-section">
                    <div class="city-slider">
                        <div class="background" :style="{ backgroundImage: `url(${currentBackground})` }"></div>
                        <div v-if="animating" class="background background-next"
                            :style="{ backgroundImage: `url(${nextBackground})` }" @animationend="onAnimationEnd"></div>

                        <div class="bg-content" :key="index">
                            <div class="name">{{ allItems[index].title }}</div>
                            <div class="des">{{ allItems[index].description }}</div>
                            <button class="button">More</button>
                        </div>

                        <div class="container">
                            <div class="slide">
                                <div v-for="(item, i) in visibleItems.slice(1, 6)" :key="i" class="item"
                                    :style="getStyle(i)" @click="goToSlide((index + i + 1) % allItems.length)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- === Budget Section === -->
        <div class="budget-wrapper">
            <div class="budget-header">
                <h2 class="budget-title">Try our features</h2>
                <p class="budget-subtitle">Enhancing your experiences with our latest features</p>
            </div>

            <div class="carousel-grid">
                <input type="radio" name="position" :checked="activeIndex === 0" @click="setSlide(0)" />
                <input type="radio" name="position" :checked="activeIndex === 1" @click="setSlide(1)" />
                <input type="radio" name="position" :checked="activeIndex === 2" @click="setSlide(2)" />
                <input type="radio" name="position" :checked="activeIndex === 3" @click="setSlide(3)" />
                <input type="radio" name="position" :checked="activeIndex === 4" @click="setSlide(4)" />

                <div id="carousel">
                    <div class="carousel-item" v-for="(item, index) in features" :key="index"
                        :style="{ '--offset': index + 1 }" @click="setSlide(index)">
                        <img :src="getBudgetImage(item.image)" />
                        <div class="carousel-text">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.desc }}</p>
                            <router-link :to="`/feature/${item.title.replace(/\s+/g, '-').toLowerCase()}`"
                                class="btn-link">
                                <i class="ri-send-plane-fill"></i> Let's go
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- === Event Section === -->
        <div class="event-wrapper">
            <div class="event-header">
                <h2 class="budget-title">Upcoming Event</h2>
                <p class="budget-subtitle">Prepare yourself the memorable moments is coming </p>
            </div>
            <div class="event-card">
                <div class="event-image">
                    <img src="@/assets/picture/event-water.jpg" alt="Water Festival" />
                </div>
                <div class="event-info">
                    <p class="location">📍 Phnom Penh, Cambodia</p>
                    <h2 class="title">Water Festival</h2>
                    <p class="date">4 Nov - 6 Nov</p>
                    <p class="desc">
                        The Water Festival 2025 in Cambodia, held from November 4 to 6, celebrates the Tonle Sap River's
                        flow reversal.
                        It features boat races, fireworks, and festive gatherings, bringing people together to enjoy the
                        vibrant tradition.
                    </p>
                </div>
            </div>
        </div>
        <!-- === Journal Section === -->
        <div class="journal-wrapper">
            <div class="top-bar">
                <div class="header-banner">
                    <h1>Top Travel Journals</h1>
                    <p>Explore our latest stories from our active users</p>
                </div>
                <router-link to="/journal" class="create-button">
                    View All
                </router-link>
            </div>
            <JournalBox :journals="journals" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import JournalBox from '@/components/JournalBox.vue'

/* NewPlace data */
const cards = [
    { image: 'mountain.jpg' },
    { image: 'temple.jpg' },
    { image: 'sea.jpg' }
]

function getImageUrl(filename) {
    return new URL(`../assets/picture/${filename}`, import.meta.url).href
}

/* City Slider */
const allItems = [
    {
        title: 'Angkor Wat Temple',
        description: 'The world’s largest religious monument, a symbol of Cambodia’s history and culture.',
        image: new URL('../assets/picture/a1.jpg', import.meta.url).href
    },
    {
        title: 'Royal Palace',
        description: 'A stunning complex in Phnom Penh that serves as the royal residence of the King of Cambodia.',
        image: new URL('../assets/picture/a2.jpg', import.meta.url).href
    },
    {
        title: 'Bokor National Park',
        description: 'A lush escape in the mountains featuring cool weather, waterfalls, and colonial ruins.',
        image: new URL('../assets/picture/a3.jpg', import.meta.url).href
    },
    {
        title: 'Preah Thorng Neang Neak Roundabout',
        description: 'A symbolic statue depicting a famous Khmer legend, located in the heart of Kep.',
        image: new URL('../assets/picture/a4.jpg', import.meta.url).href
    },
    {
        title: 'National Museum',
        description: 'Home to thousands of ancient Khmer artifacts and rich Cambodian heritage.',
        image: new URL('../assets/picture/a5.png', import.meta.url).href
    },
    {
        title: 'Preah Vihear Temple',
        description: 'A breathtaking cliffside temple with panoramic views, rich in spiritual history.',
        image: new URL('../assets/picture/a6.jpg', import.meta.url).href
    },
    {
        title: 'Koh Songsa',
        description: 'A luxury private island in the Gulf of Thailand known for clear waters and tranquility.',
        image: new URL('../assets/picture/a7.jpg', import.meta.url).href
    }
]

const index = ref(0)
const currentBackground = ref(allItems[0].image)
const nextBackground = ref('')
const animating = ref(false)

const visibleItems = computed(() => {
    const result = []
    for (let i = 0; i < 6; i++) {
        result.push(allItems[(index.value + i) % allItems.length])
    }
    return result
})

const goToSlide = (target) => {
    if (animating.value || target === index.value) return
    index.value = target
    nextBackground.value = allItems[target].image
    animating.value = true
}

const onAnimationEnd = () => {
    currentBackground.value = nextBackground.value
    animating.value = false
}

const getStyle = (i) => {
    const gap = 240
    return {
        left: `calc(50% + ${i * gap}px)`,
        backgroundImage: `url(${visibleItems.value[i + 1]?.image})`,
    }
}

/* Budget Section */

const activeIndex = ref(2)
const features = [
    { image: 'budget1.jpg', title: 'Trip Planner', desc: 'Plan your trip in a smarter way' },
    { image: 'budget.jpg', title: 'Budget Recom', desc: 'Analysis and recommend the best place with your budget' },
    { image: 'budget2.jpg', title: 'Smart Filter', desc: 'Filter destinations by preferences and affordability' },
    { image: 'budget1.jpg', title: 'Nearby Explore', desc: 'Find the nearest places worth seeing' },
    { image: 'budget2.jpg', title: 'Custom Path', desc: 'Customize your journey like a pro' }
]
const getBudgetImage = (img) => new URL(`../assets/picture/${img}`, import.meta.url).href

const setSlide = (index) => {
    activeIndex.value = index
}
</script>

<style scoped>
/* ========== NewPlace Styles ========== */
.new-place-wrapper {
    position: relative;
    height: 100vh;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    margin-bottom: 1.5rem;
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

.card-container {
    display: flex;
    height: 100vh;
}

.new-place-card {
    flex: 1;
    position: relative;
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
    font-size: 2.8rem;
    color: white;
}

.arrow {
    position: absolute;
    left: 27rem;
    bottom: 30px;
    font-size: 3rem;
    color: white;
}

/* ========== City Styles ========== */
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
    margin-bottom: 2rem;

}

.city-slider {
    width: 85%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    border-radius: 15px;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    z-index: 0;
    filter: brightness(0.9);
}

.background::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0));
    z-index: 1;
}

.background-next {
    z-index: 1;
    animation: fadeInZoom 0.8s ease-in-out forwards;
}

@keyframes fadeInZoom {
    from {
        opacity: 0;
        transform: scale(1);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.bg-content {
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translateY(-50%);
    z-index: 2;
    color: white;
    text-align: left;
    max-width: 400px;
}

.bg-content .name {
    font-size: 48px;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 8px;
}

.bg-content .des {
    font-size: 16px;
    line-height: 1.5;
    opacity: 0.9;
}

.bg-content .button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    color: #333;
    border: none;
    border-radius: 40px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
}

.bg-content .button:hover {
    background-color: #0c9272;
    color: white;
}

.container {
    position: relative;
    z-index: 3;
    width: 1400px;
    height: 600px;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
}

.slide {
    position: relative;
    width: 90%;
    height: 100%;
}

.item {
    width: 220px;
    height: 350px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 24px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.25);
    transition: left 0.5s ease, transform 0.4s ease;
    cursor: pointer;
    margin-left: 10px;
}

/* ========== Budget Styles ========== */
.budget-wrapper {
    width: 100%;
    text-align: center;
    padding: 2rem;
}

.budget-title {
    font-size: 2rem;
    font-weight: bold;
    color: #111;
    margin: 0 auto;
}

.budget-subtitle {
    font-size: 0.95rem;
    color: #666;
    margin-top: 0.5rem;
}

.carousel-grid {
    display: grid;
    grid-template-rows: 400px 100px;
    grid-template-columns: 1fr 30px 30px 30px 30px 30px 1.07fr;
    align-items: center;
    justify-items: center;
    margin-top: 2rem;
}

#carousel {
    grid-row: 1;
    grid-column: 1 / 8;
    width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: 500px;
    --items: 5;
    --middle: 3;
    --position: 1;
    pointer-events: none;
}

.carousel-item {
    margin-right: 65px;
    position: absolute;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    --r: calc(var(--position) - var(--offset));
    --abs: max(calc(var(--r) * -2), var(--r));
    transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)));
    z-index: calc((var(--position) - var(--abs)));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
    cursor: pointer;
}

.carousel-item img {
    width: 100%;
    height: 70%;
    object-fit: cover;
}

.carousel-text {
    padding: 1rem;
}

.carousel-text h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.carousel-text p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
}

input[type="radio"] {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.3s;
}

input[type="radio"]:checked {
    background: #00c99f;
}

input:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

input:nth-of-type(1):checked~#carousel {
    --position: 1;
}

input:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

input:nth-of-type(2):checked~#carousel {
    --position: 2;
}

input:nth-of-type(3) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
}

input:nth-of-type(3):checked~#carousel {
    --position: 3;
}

input:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
}

input:nth-of-type(4):checked~#carousel {
    --position: 4;
}

input:nth-of-type(5) {
    grid-column: 6 / 7;
    grid-row: 2 / 3;
}

input:nth-of-type(5):checked~#carousel {
    --position: 5;
}

.btn-link {
    background: #00c99f;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s;
    display: inline-block;
    margin-top: 0.5rem;
}

.btn-link:hover {
    background-color: #00a07a;
}

/* ========== Event Styles ========== */
.event-header {
    text-align: center;
    margin-bottom: 1rem;
}

.event-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: linear-gradient(to right, #ffffff, #f2fefc);
    padding: 40px;
    border-radius: 20px;
    max-width: 1000px;
    margin: auto;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;
}

.event-image img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.event-info {
    max-width: 500px;
    margin-bottom: 8rem;
}

.location {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.date {
    font-size: 16px;
    font-weight: 600;
    margin: 8px 0;
    color: #333;
}

.desc {
    font-size: 14px;
    color: #444;
    line-height: 1.6;
}

.journal-wrapper {
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
}

.top-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
}

@media (min-width: 768px) {
    .top-bar {
        flex-direction: row;
        align-items: center;
    }
}

.header-banner h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: #222;
}

.header-banner p {
    font-size: 1rem;
    color: #555;
}

.create-button {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    background-color: white;
    color: #28a745;
    border: 2px solid #28a745;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    gap: 8px;
    transition: all 0.3s ease;
}

.create-button:hover {
    background-color: #28a745;
    color: white;
}
</style>
