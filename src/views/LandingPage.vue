<script setup>
import Newplace from '@/components/Newplace.vue';
import Cityslider from './Cityslider.vue';
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
      <Newplace image="mountain.png" label="Mountain" />
      <Newplace image="temple.png" label="Temple" />
      <Newplace image="sea.png" label="SEA" />
    </div>

    <!-- New City Section -->
    <div class="newcity-section">
      <Cityslider />
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  /* background-color: #000; */
  color: white;
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

.card-container > * {
  flex: 1;
}

.newcity-section {
  margin-top: 5rem;
  padding: 2rem;
  background-color: white;
  color: black;
  border-top: 2px solid #eee;
}

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
</style>