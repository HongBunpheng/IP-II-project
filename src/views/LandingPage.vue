<script setup>
import Newplace from '@/components/Newplace.vue'
import City from '@/components/City.vue'
import Budget from '@/components/Budget.vue'
import Event from '@/components/Event.vue'
import Province from '@/components/Province.vue'
</script>

<template>
  <div class="landing-page">
    <!-- Logo -->
    <div class="logo">
      <img src="/src/assets/logo.png" alt="TripTrek Logo" />
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
      <Newplace image="new1.jpg" label="Mountain" />
      <Newplace image="new2.jpg" label="Temple" />
      <Newplace image="new3.jpg" label="SEA" />
    </div>

    <!-- City Section Title + Slider with background -->
    <div class="city-wrapper">
      <div class="city-section">
        <h1 class="title">City And Destination are waiting for you</h1>
        <h2 class="subtitle">WHY HESITATING</h2>
        <div class="newcity-section">
          <City />
          <Budget />
          <Event />
          <!-- <Province /> -->
           <div class="province-section">
            <h2 class="province-title">Most visited province</h2>
            <p class="province-subtitle">Here are some of the most visited places in 2025</p>

            <div class="province-list">
              <Province imageSrc="visit1.jpg" location="Koh Rong, Cambodia" name="Shihanoukville" />
              <Province imageSrc="visit2.jpg" location="Angkor Wat, Cambodia" name="Siem Reap" />
              <Province imageSrc="visit3.jpg" location="Kirirom, Cambodia" name="Kompong Speu" />
            </div>

            <!-- Optional arrows -->
            <div class="province-arrows">
              <button class="arrow-btn">←</button>
              <button class="arrow-btn filled">→</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  color: white;
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
  gap: 7rem;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  /* background-color: red; */

}

.nav-links a {
  font-weight: bold;
  font-size: 20px;
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

.card-container > * {
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

  .card-container > * {
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

/* province section */
.province-section {
  margin-top: 4rem;
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.province-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #111;
}

.province-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
}

.province-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.province-arrows {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.arrow-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ddd;
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.arrow-btn.filled {
  background: #295943;
}



</style>
