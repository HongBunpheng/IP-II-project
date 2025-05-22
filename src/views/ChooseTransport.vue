<template>
  <div class="choose-transport">
    <!-- Header Section -->
    <div class="header-section">
      <img src="https://yimbyqld.com.au/wp-content/uploads/2023/06/gold-coast-light-rail.png" alt="Train" class="header-image" />
      <div class="header-text">
        <h1>Your Journey<br/>Of Exploration<br/>Begins Here!</h1>
        <p>
          That is the most popular place we’re highly recommend to visit it, enjoy and be chill with your love here.
          We're welcome for you to impress and bring you to stay here.
        </p>
      </div>
    </div>

    <!-- Back Button -->
    <div class="back-button" @click="$router.back()">←</div>

    <!-- Title and Subtitle -->
    <div class="page-title">
      <h2>Travel Options</h2>
      <p class="description">
        That is the most popular place we're highly recommend to your visit it, enjoy and be chill with your love here.
        we're welcome for your to impress and bring you to stay here
      </p>
      <p class="sub">Stations & Shops Choose One</p>
    </div>

    <!-- Transport Component Loop -->
    <div class="transport-list">
      <Transportation
        v-for="(item, i) in transports"
        :key="i"
        :departure-time="item.departureTime"
        :departure-city="item.departureCity"
        :arrival-time="item.arrivalTime"
        :arrival-city="item.arrivalCity"
        :distance="item.distance"
        :travel-time="item.travelTime"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script setup>
import Transportation from '@/components/Transportation.vue'

const transports = [
  {
    departureTime: '11:00 PM',
    departureCity: 'Phnom Penh',
    arrivalTime: '3:00 AM',
    arrivalCity: 'Siem Reap',
    distance: '700km',
    travelTime: '6h',
    price: 11
  },
  {
    departureTime: '9:00 AM',
    departureCity: 'Takeo',
    arrivalTime: '12:00 PM',
    arrivalCity: 'Kampot',
    distance: '300km',
    travelTime: '3h',
    price: 8
  },
  {
    departureTime: '4:00 PM',
    departureCity: 'Kampong Cham',
    arrivalTime: '9:00 PM',
    arrivalCity: 'Battambang',
    distance: '500km',
    travelTime: '5h',
    price: 12
  }
]
</script>

<style scoped>
.choose-transport {
  font-family: 'Segoe UI', sans-serif;
  color: #111;
  background: #fff;
}

.header-section {
  position: relative;
  width: 100%;
  /* height: 600px;  */
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 40px;
}

.header-image {
  width: 95%;
  height: 550px;
  object-fit: cover;
  border-radius: 50px;
  display: block;
}

.header-text {
  position: absolute;
  top: 70px;
  left: 50px;
  right: 40%;
  color: white;
  width: 100%;
  max-width: 500px;
  text-align: left;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}

.header-text h1 {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  margin: 0;
}

.header-text p {
  margin-top: 10px;
  font-size: 20px;
}

.back-button {
  position: absolute;
  margin-top: 30px;
  left: 50px;
  font-size: 3rem;
  cursor: pointer;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
}

.page-title h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.description {
  max-width: 600px;
  margin: 10px auto;
  font-size: 14px;
  color: #555;
}

.sub {
  font-weight: bold;
  margin-top: 10px;
}

.transport-list {
  max-width: 700px;
  margin: auto;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .header-text {
    left: 20px;
    top: 20px;
    max-width: 90%;
  }

  .header-text h1 {
    font-size: 1.5rem;
  }

  .header-text p {
    font-size: 13px;
  }
}
</style>
