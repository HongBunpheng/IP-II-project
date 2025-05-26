<template>
  <div class="new-city-wrapper">
    <h1 class="title">City And Destination are waiting for you</h1>
    <h2 class="subtitle">WHY HESITATING</h2>

    <div class="main-container">
      <!-- Background Image -->
      <img class="background" src="/src/assets/angkor-bg.png" alt="Main Background" />

      <!-- Overlay City Cards -->
      <div class="card-row">
          <City image="statue.jpg" />
          <City image="lake.jpg" />
          <City image="monument.jpg" />
          <City image="kompot.jpg" />
          <City image="pvh.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import City from '@/components/City.vue';
</script>

<style scoped>
.new-city-wrapper {
  /* width: 100%; */
  text-align: center; 
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  background: url('/src/assets/angkor-bg.png') repeat;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.subtitle {
  color: #00cc99;
  font-family: 'Brush Script MT', cursive;
  margin-top: 0.5rem;
}

.main-container {
  margin-top: 5rem; /* ✅ space from top */
  margin-bottom: 2rem;
  position: relative;
  background-color: white;
  /* border-radius: 20px; */
}


.background {
  /* width: 100%; */
  height: 400px;
  object-fit: cover;
  display: block;
  filter: brightness(0.6);
}

.card-row {
  margin-top: 2rem; /* ✅ instead of -200px */
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 5;
  position: relative;
}
</style>