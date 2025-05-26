<template>
  <div class="city-card">
    <img :src="imageUrl" alt="city image" class="thumbnail" />
  </div>
</template>

<script setup>
const props = defineProps({
  image: String
});

const imageUrl = props.image
  ? new URL(`../assets/${props.image}`, import.meta.url).href
  : null;
</script>

<style scoped>
.city-card {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  background: red;
  cursor: pointer;
}

.city-card:hover {
  transform: scale(1.05);
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
