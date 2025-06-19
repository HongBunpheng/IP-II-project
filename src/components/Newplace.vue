<template>
  <div class="new-place-card">
    <img v-if="imageUrl" :src="imageUrl" :alt="label" class="place-image" />
    <div class="place-overlay">
      <span class="label">{{ label }}</span>
      <span class="arrow"></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  label: String
});

const imageUrl = props.image
  ? new URL(`../assets/${props.image}`, import.meta.url).href
  : null;
</script>

<style scoped>
.new-place-card {
  position: relative;
  width: 100%;
  height: 100%;
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
  color: white;
  font-size: 2.8rem;
    justify-content: space-between;

  /* font-weight: 600; */
}

.arrow {
  position: absolute;
  left: 27rem;
  bottom: 30px;
  color: white;
  font-size: 3rem;
  /* font-weight: bold; */
}
</style>