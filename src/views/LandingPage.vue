<template>
  <div class="landing-page">
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
  </div>
</template>

<script setup>
import Newplace from '@/components/Newplace.vue';
</script>

<style scoped>
.landing-page {
  position: relative;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  background-color: black;
}

/* NAVIGATION BAR */
.nav-bar {
  position: absolute;
  top: 20px;
  left: 30px;
  right: 30px;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-left {
  flex-grow: 1;
}

 .nav-links {
  display: flex;
  width: 500px;
  gap: 2rem;
  font-size: 1.7rem;
  font-weight: bold;
  justify-content: space-between;
}

.nav-links a {
  color: white;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: all 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: #ccc;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* ICON BUTTONS */
.icon-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

/* LOGIN BUTTON */
.login-btn {
  background: white;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  cursor: pointer;
}

/* HERO TEXT */
.hero-text {
  position: absolute;
  width: 80rem;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 2.3rem;
  /* font-weight: bold; */
}

/* IMAGE CARDS */
.card-container {
  display: flex;
  height: 100vh;
}

.card-container > * {
  flex: 1;
}

/* RESPONSIVE STYLES */
@media (max-width: 768px) {
  .hero-text {
    font-size: 1.5rem;
    width: 90%;
    padding: 0 1rem;
  }

  .nav-bar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .nav-right {
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 0.5rem;
  }

  .card-container {
    flex-direction: column;
    height: auto;
  }

  .card-container > * {
    height: 33vh;
  }
}
</style>
