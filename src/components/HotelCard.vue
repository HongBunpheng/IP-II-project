<template>
  <div
    v-for="(hotel, index) in hotels"
    :key="hotel.id"
    class="hotel-card"
    :class="{ 'reverse': index % 2 !== 0 }"
  >
    <!-- Info Section -->
    <div class="hotel-info">
      <h2 class="hotel-title">{{ hotel.name }}</h2>
      <p class="hotel-description">{{ hotel.details }}</p>
      <div class="hotel-footer">
        <button class="details-btn" @click="goToDetail(hotel.id)">details</button>
        <div class="stars">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{ filled: n <= hotel.rating }"
          >★</span>
        </div>
      </div>
    </div>

    <!-- Overlapping Images -->
    <div class="hotel-images" v-if="hotel.image?.length >= 2">
      <img :src="hotel.image[1]" class="img back" />
      <img :src="hotel.image[0]" class="img front" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const emit = defineEmits(['hotelNamesLoaded'])
const hotels = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/hotels')
    hotels.value = res.data.map(hotel => ({
      ...hotel,
      image: hotel.image.map(img =>
        img.startsWith('http') ? img : `http://localhost:8000/storage/${img}`
      )
    }))

    const hotelNames = hotels.value.map(h => h.name)
    emit('hotelNamesLoaded', hotelNames)
  } catch (err) {
    console.error('❌ Failed to load hotels:', err)
  }
})

const goToDetail = (id) => {
  router.push(`/hotel/${id}`)
}
</script>
<style scoped>
.hotel-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3e3e3;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 3rem;
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

/* Reverse layout */
.hotel-card.reverse {
  flex-direction: row-reverse;
}

/* Text section */
.hotel-info {
  flex: 1 1 300px;
  min-width: 0;
}

.hotel-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #111;
}

.hotel-description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #333;
}

.hotel-footer {
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

/* Floating images above the card */
.hotel-images {
  position: absolute;
  top: -40px;
  right: 30px;
  width: 180px;
  height: 330px;
  z-index: 2;
}

.hotel-card.reverse .hotel-images {
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

/* Back image: larger and behind */
.back {
  width: 180px;
  height: 330px;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Front image: smaller and overlaps from left */
.front {
  width: 140px;
  height: 260px;
  top: 40px;
  left: -40px;
  z-index: 2;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .hotel-card,
  .hotel-card.reverse {
    flex-direction: column;
    text-align: center;
  }

  .hotel-images {
    position: static;
    width: 90%;
    height: 220px;
    margin: 1rem auto 0 auto;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hotel-footer {
    justify-content: center;
  }
}

</style>
