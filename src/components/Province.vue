<template>
    <div class="province-card">
    <div class="image-container">
      <img :src="getImage(imageSrc)" :alt="name" />
    </div>
    <div class="details">
      <p class="location">{{ location }}</p>
      <h2 class="province-name">{{ name }}</h2>
    </div>
  </div>

</template>

<script setup>
defineProps({
  imageSrc: { type: String, required: true },
  location: { type: String, default: '' },
  name: { type: String, required: true }
})

const isExternal = (url) => url.startsWith('http://') || url.startsWith('https://')
const getImage = (img) => isExternal(img) ? img : new URL(`../assets/${img}`, import.meta.url).href
</script>

<style scoped>


.province-card {
  width: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

/* .province-card:hover {
  transform: translateY(-5px);
} */

.image-container {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;

}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.details {
  text-align: center;
  padding: 12px 8px;
}

.location {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 4px;
}

.province-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #222;
}
</style>
