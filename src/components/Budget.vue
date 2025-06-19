<template>
  <div class="budget-wrapper">
    <div class="budget-header">
      <h2 class="budget-title">Try our features</h2>
      <p class="budget-subtitle">Enhancing your experiences with our latest features</p>
    </div>

    <div class="budget-cards">
      <div
        class="card"
        v-for="(item, index) in features"
        :key="index"
        :class="{ active: index === 1,
                  left: index === 0,
                  right: index === 2
         }"
      >
        <img :src="getImage(item.image)" alt="feature" class="card-img" />
        <div v-if="index === 1" class="card-overlay">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.desc }}</p>
            <button class="card-btn"><i class="ri-send-plane-fill"></i>Let's go</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { image: 'budget1.png' },
  {
    image: 'budget.png',
    title: 'Budget Recom',
    desc: 'Analysis and recommend the best place with your budget'
  },
  { image: 'budget2.png' }
]

const getImage = (img) => new URL(`../assets/${img}`, import.meta.url).href
</script>

<style scoped>
.budget-wrapper {
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.budget-header {
  margin-bottom: 2rem;
}

.budget-title {
  font-size: 2rem;
  font-weight: bold;
  color: #111;
}

.budget-subtitle {
  font-size: 0.95rem;
  color: #666;
  margin-top: 0.5rem;
}

.budget-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.card {
  position: relative;
  width: 290px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, z-index 0.3s;
  opacity: 0.4;
  filter: brightness(0.6);
  z-index: 1;
  box-shadow:
  rgba(41, 89, 67, 0.25) 0px 54px 55px,
  rgba(41, 89, 67, 0.12) 0px -12px 30px,
  rgba(41, 89, 67, 0.12) 0px 4px 6px,
  rgba(41, 89, 67, 0.17) 0px 12px 13px,
  rgba(41, 89, 67, 0.09) 0px -3px 5px;

  /* background: linear-gradient(to bottom, #fff, #e9fdf7); */

}

.card.active {
  transform: scale(1.1);
  opacity: 1;
  filter: brightness(1);
  z-index: 3;
}
/* Left/right smaller + dimmed */
.card.left,
.card.right {
  transform: scale(0.9);
  opacity: 1;
  margin-left: -50px;
  margin-right: -50px;
  filter: brightness(0.6);
  z-index: 1;
  
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: #fff;
  text-align: center;
}
.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
}

.card-desc {
  font-size: 0.7rem;
  line-height: 1.4;
  padding: 0 1rem;
  color: #e0e0e0;
  margin: 0;
}


.card-btn {
  background: #00c99f;
  border: none;
  padding: 0.5rem;
  border-radius: 0px;
  color: #000000;
  font-size: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.card-btn i {
  margin-right: 0.3rem;
  color: black;
}

.card-btn:hover {
  background: #009f7a;
}
</style>
