<template>
  <div class="restaurant-card" :class="{ reverse: index % 2 !== 0 }">
    <!-- Info Section -->
    <div class="restaurant-info">
      <h2 class="restaurant-title">{{ restaurant.name }}</h2>
      <p class="restaurant-description">{{ restaurant.details }}</p>
      <div class="restaurant-footer">
        <button class="details-btn" @click="goToDetail(restaurant.id)">details</button>
        <div class="stars">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{ filled: n <= restaurant.rating }"
          >★</span>
        </div>
      </div>
    </div>

    <!-- Overlapping Images -->
    <div class="restaurant-images" v-if="restaurant.image?.length >= 2">
      <img :src="restaurant.image[1]" class="img back" />
      <img :src="restaurant.image[0]" class="img front" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  restaurant: Object,
  index: Number
})

const router = useRouter()

const goToDetail = (id) => {
  router.push(`/restaurant/${id}`)
}
</script>

<style scoped>
.restaurant-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3e3e3;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10rem;
  gap: 30px;
  max-width: 1000px;
  width: 90%;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  position: relative;
  overflow: visible;
  z-index: 0;
}

.restaurant-card.reverse {
  flex-direction: row-reverse;
}

.restaurant-info {
  flex: 1 1 300px;
  min-width: 0;
}

.restaurant-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #111;
}

.restaurant-description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #333;
}

.restaurant-footer {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.details-btn {
  background-color: #00c4b3;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
}

.stars {
  display: flex;
  gap: 5px;
}

.star {
  font-size: 18px;
  color: #ccc;
}

.star.filled {
  color: #f5b700;
}

.restaurant-images {
  position: absolute;
  top: -40px;
  right: 30px;
  width: 180px;
  height: 330px;
  z-index: 2;
}

.restaurant-card.reverse .restaurant-images {
  left: 30px;
  right: auto;
}

.img {
  position: absolute;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
}

.back {
  width: 180px;
  height: 330px;
  top: 0;
  left: 0;
  z-index: 1;
}

.front {
  width: 140px;
  height: 260px;
  top: 40px;
  left: -40px;
  z-index: 2;
}

@media (max-width: 768px) {
  .restaurant-card,
  .restaurant-card.reverse {
    flex-direction: column;
    text-align: center;
    position: relative;
  }

  .restaurant-info {
    order: 2;
    width: 100%;
  }

  .restaurant-card.reverse .restaurant-info {
    order: 1;
  }

  .restaurant-images {
    position: static;
    width: 90%;
    height: 220px;
    margin: 1rem auto 0 auto;
    order: 1;
  }

  .restaurant-card.reverse .restaurant-images {
    order: 2;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .restaurant-footer {
    justify-content: center;
  }
}
</style>
