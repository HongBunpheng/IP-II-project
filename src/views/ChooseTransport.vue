<template>
  <div class="choose-transport">
    <!-- Header Section -->
    <div class="header-section">
      <img src="@/assets/transport.png" alt="Train" class="header-image" />
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

    <!-- Travel Options -->
    <div class="transport-list">
      <div
        v-for="(item, i) in transportOptions"
        :key="i"
        class="transport-card"
      >
        <div class="card-body">
          <div class="time-info">
            <p>{{ item.fromTime }}</p>
            <p class="bold">{{ item.from }}</p>
            <div class="line"></div>
            <p>{{ item.toTime }}</p>
            <p class="bold">{{ item.to }}</p>
          </div>
          <div class="card-actions">
            <button>Book Now</button>
            <p class="price">price <span>${{ item.price }}</span></p>
          </div>
        </div>
        <div class="card-footer">
          <span>📍 {{ item.distance }}km</span>
          <span>⏱️ Travel Time {{ item.duration }}</span>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup>
const transportOptions = [
  {
    from: 'Phnom Penh',
    to: 'Siem Reap',
    fromTime: '11:00 PM',
    toTime: '3:00 AM',
    distance: 700,
    duration: '6h',
    price: 11
  },
  {
    from: 'Phnom Penh',
    to: 'Siem Reap',
    fromTime: '11:00 PM',
    toTime: '3:00 AM',
    distance: 700,
    duration: '6h',
    price: 11
  },
  {
    from: 'Phnom Penh',
    to: 'Siem Reap',
    fromTime: '11:00 PM',
    toTime: '3:00 AM',
    distance: 700,
    duration: '6h',
    price: 11
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
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.header-image {
  width: 95%;
  height: 430px;
  /* object-fit: cover; */
  border-radius: 50px;
  display: block;
}

.header-text {
  position: absolute;
  top: 30px;
  /* left: 50%; */
  right: 40%;
  color: white;
  width: 90%;
  max-width: 500px;
  text-align: left;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  border-radius: 12px;
}
/* .header-text h1{
    
} */

.header-text h1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
}

.header-text p {
  margin-top: 10px;
  font-size: 14px;
}

.back-button {
  font-size: 1.8rem;
  padding: 20px;
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
  font-weight: 600;
  margin-top: 10px;
}

.transport-list {
  max-width: 700px;
  margin: auto;
  padding: 0 20px;
}

.transport-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.time-info {
  font-size: 14px;
}

.bold {
  font-weight: bold;
  font-size: 16px;
}

.line {
  border-left: 2px solid green;
  height: 30px;
  margin: 8px 0;
}

.card-actions {
  text-align: right;
}

.card-actions button {
  background: #00b894;
  color: white;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
}

.card-actions button:hover {
  background: #019875;
}

.price {
  font-size: 14px;
  color: #333;
  margin-top: 6px;
}

.price span {
  font-weight: bold;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 13px;
  color: #666;
}

.footer {
  background-color: #00b894;
  text-align: center;
  color: white;
  padding: 20px;
  margin-top: 40px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.footer h1 {
  font-size: 24px;
  font-weight: bold;
}
</style>
