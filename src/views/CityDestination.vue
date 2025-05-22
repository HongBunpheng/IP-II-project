<template>
  <div class="city-showcase">
    <div class="headline">
      <h2>City And Destination are waiting for you</h2>
      <h3 class="scribble">WHY HESITATING</h3>
    </div>

    <div class="city-card">
      <div class="main-info">
        <h1>Siem Reap</h1>
        <p>
          Siem Reap is a popular tourist city in Cambodia, home to the famous Angkor Wat temple.
        </p>
        <router-link to="/city/siem-reap" class="more-button">more</router-link>
      </div>

      <div class="gallery">
        <img src="@/assets/statue.jpg" alt="Statue" />
        <img src="@/assets/lake.jpg" alt="Lake" />
        <img src="@/assets/monument.jpg" alt="Monument" />
      </div>

      <div class="background" />
    </div>

    <div class="dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<script setup>
// This can be made dynamic with props or API later
</script>

<style scoped>
.city-showcase {
  padding: 60px 20px;
  background: #fff;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.headline h2 {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.scribble {
  font-family: 'Comic Sans MS', cursive;
  font-size: 24px;
  color: #00c78c;
  margin-top: 8px;
}

.city-card {
  margin-top: 40px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: url('@/assets/angkorbeuti.png') no-repeat center center;
  background-size: cover;
  padding: 40px 30px;
  color: white;
}

.main-info {
  text-align: left;
  max-width: 400px;
}

.main-info h1 {
  font-size: 2rem;
  font-weight: bold;
}

.main-info p {
  margin: 10px 0 20px;
  line-height: 1.4;
}

.more-button {
  display: inline-block;
  background: white;
  color: #111;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
}

.gallery {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  gap: 15px;
}

.gallery img {
  width: 80px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dots {
  margin-top: 20px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 4px;
}

.dot.active {
  background: #00b894;
}
</style>
