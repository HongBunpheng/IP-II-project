<template>
  <div class="city-card">
    <img src="@/assets/statue.jpg" alt="City Panel" class="city-image" />
  </div>
</template>

<script setup>
// No props yet, static for now — you can extend with props later
</script>

<style scoped>
.city-card {
  width: 140px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  /* backdrop-filter: blur(6px); */
  /* background: rgba(255, 255, 255, 0.1); */
  box-shadow:rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.city-card:hover {
  transform: scale(1.03);
}

.city-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
