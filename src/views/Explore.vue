<template>
    <div class="explore-page">
        <!-- Hero Image -->
        <div class="hero-section">
            <img src="@/assets/picture/hero-angkor.png" alt="Angkor Wat" />
        </div>

        <!-- Recommendation Section -->
        <section class="recommend-section">
            <div class="image-stack">
                <img src="@/assets/picture/city1.png" alt="City 1" class="img img-1" />
                <img src="@/assets/picture/city2.png" alt="City 2" class="img img-2" />
                <img src="@/assets/picture/palace.png" alt="Palace" class="img img-3" />
            </div>

            <div class="recommend-text">
                <p class="label">About_</p>
                <h2>We Recommend</h2>
                <h3>Beautiful Destinations<br />Every Month</h3>
                <p class="description">
                    That is the most popular place we’re highly recommend to your for visit it , enjoy and be chill with
                    your love here.
                </p>
            </div>
        </section>

        <!-- Feature Section -->
        <section class="features-sections">
            <div class="features-left">
                <p class="label">What We Give_</p>
                <h2>Best Features</h2>
                <h3>For You</h3>
                <p class="description">
                    That is the most popular place we're highly recommend to your for visit it, enjoy and be chill with
                    your love here,
                </p>
            </div>
            <div class="features-right">
                <DetailHotel />
                <DetailRestaurant />
                <DetailTransportation />
            </div>
        </section>

        <!-- 🔽 New Top Destination Section -->
        <section class="top-destination">
            <div class="overlay-content">
                <p class="subtitle">Top Destination _</p>
                <h1 class="headline">
                    Let’s Explore <span>Your Dream</span><br />
                    Destination Here!
                </h1>
                <p class="description">
                    That is the most popular place we’re highly recommend to your for<br />
                    visit it , enjoy and be chill with your love here.
                </p>
            </div>
            <div class="location-input">
                <input type="text" placeholder="Location📍" />
                <!-- <span class="icon"></span> -->
            </div>
        </section>
        <!-- Perfect Trip Section -->
        <section class="perfect-trip">
            <h2 class="title">Your Perfect Trip is Waiting For You</h2>

            <div class="trip-grid">
                <div class="trip-card" v-for="(place, index) in trips" :key="index">
                    <img :src="place.image" :alt="place.name" class="trip-image" />
                    <p class="trip-name">{{ place.name }}</p>
                </div>
            </div>

            <button class="see-more-btn">See More</button>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DetailHotel from '@/components/DetailHotel.vue'
import DetailRestaurant from '@/components/DetailRestaurant.vue'
// import DetailTransportation from '@/components/DetailTransportation.vue'

const trips = ref([])

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:8000/api/destinations')
        const data = await res.json()
        trips.value = data
    } catch (error) {
        console.error('Failed to load destinations:', error)
    }
})
</script>


<style>
.perfect-trip {
    text-align: center;
    padding: 4rem 8vw;
    font-family: 'Urbanist', sans-serif;
}

.perfect-trip .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.trip-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.trip-card {
    width: 200px;
    text-align: center;
}

.trip-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.trip-name {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
}

.see-more-btn {
    margin-top: 2rem;
    padding: 0.6rem 2rem;
    border: 1.5px solid #00985b;
    color: #00985b;
    border-radius: 30px;
    background-color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
}

.see-more-btn:hover {
    background-color: #00985b;
    color: white;
}

.features-sections {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 4rem 8vw;
    flex-wrap: wrap;
    font-family: 'Urbanist', sans-serif;
}

/* Left Text Block */
.features-left {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
}

.features-left .label {
    color: #00985b;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.features-left h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
}

.features-left h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
}

.features-left .description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
}

/* Right Card Grid */
.features-right {
    flex: 3;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* align-content: end; */
    margin-right: 10%;
}

.explore-page {
    font-family: 'Urbanist', sans-serif;
    color: #333;
}

/* Hero Section */
.hero-section img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}

/* Layout of Recommendation Section */
.recommend-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 8vw;
    gap: 4rem;
    flex-wrap: wrap;
}

/* Image Stack */
.image-stack {
    position: relative;
    width: 500px;
    height: 480px;
}

.image-stack .img {
    position: absolute;
    border-radius: 20px;
    object-fit: cover;
    /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease; */
}

.img-1 {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}

.img-2 {
    width: 370px;
    height: 370px;
    top: 200px;
    left: 170px;
    z-index: 3;
}

.img-3 {
    width: 220px;
    height: 220px;
    top: 40px;
    left: 400px;
    z-index: 2;
}

/* Text Block Styling */
.recommend-text {
    max-width: 500px;
    text-align: left;
}

.label {
    font-size: 2rem;
    font-weight: 600;
    color: #00985b;
    margin-bottom: 0.5rem;
}

.recommend-text h2 {
    font-size: 2rem;
    font-weight: 800;
    font-size: bold;
    margin: 0;
}

.recommend-text h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 2rem 0;
    font-size: bold;
    line-height: 1.4;
}

.description {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.7;
}

.hotel-features {
    display: flex;
    justify-content: flex-end;
    /* aligns to the right */
    padding: 2rem 8vw;
    gap: 20px;
}

.top-destination {
    background: url('@/assets/destination-bg.png') center/cover no-repeat;
    border-radius: 20px;
    padding: 3rem 2rem 5rem;
    margin: 3rem 8vw 5rem;
    position: relative;
    text-align: center;
    color: #000;
    /* overflow: hidden; */
    /* margin-bottom: 20%; */
    /* background-color: #00985b; */
    border: 1px solid gray;
}

.overlay-content {
    position: relative;
    z-index: 1;
}

.top-destination .subtitle {
    color: #00985b;
    font-size: 1.2rem;
    font-weight: 600;
    /* margin-bottom: 1rem; */
    /* color: #000; */
}

.top-destination .headline {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.4;
}

.top-destination .headline span {
    color: black;
}

.top-destination .description {
    font-size: 1rem;
    color: #444;
    margin-top: 1rem;
    line-height: 1.6;
}

.location-input {
    position: absolute;
    bottom: -45px;
    /* margin-bottom: 10%; */
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    border: 0px solid gray;
    padding: 1.5rem 0.5rem;
    width: 90%;
    /* max-width: 500px; */


}

.location-input .icon {
    font-size: 1.2rem;
    margin-right: 0.5rem;
    /* border: 2px; */


}

.location-input input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
}
</style>