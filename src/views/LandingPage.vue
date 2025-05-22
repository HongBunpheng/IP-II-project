<template>
  <div class="landing-page">
    <!-- Nav -->
    <header class="top-bar">
      <nav class="nav-links">
        <router-link to="#">Explore</router-link>
        <router-link to="#">Journal</router-link>
        <router-link to="#">About us</router-link>
      </nav>
      <div class="right-tools">
        <button class="theme-toggle">🌙</button>
        <!-- <i class="ri-moon-clear-fill"></i> -->
        <button class="login-button">Login</button>
        <button class="weather"><i class="ri-moon-cloudy-line"></i></button>
      </div>
    </header>

    <!-- Hero Text -->
    <div class="hero-text">
      <h1>
        <span>Discover New Places and Create</span><br>
          <span>Unforgettable Memories together</span>
        <span></span>
      </h1>
    </div>

    <!-- Image Columns -->
    <div class="image-columns">
      <div class="image-box" style="background-image: url('/src/assets/waterfall.png')">
        <div class="label">Mountain</div>
        <span>→</span>
      </div>
      <div class="image-box" style="background-image: url('/src/assets/temple.png')">
        <div class="label">Temple</div>
        <span>→</span>
      </div>
      <div class="image-box" style="background-image: url('/src/assets/river.png')">
        <div class="label">SEA</div>
        <span>→</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script yet, can be enhanced later with interactivity
</script>

<style scoped>
.landing-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
}

.top-bar {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.nav-links {
  display: flex;
  width: 30rem;
  justify-content: space-between;
  font-size: 20px;
  gap: 30px;
  /* background-color: red; */
}


.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  /* background-color: aquamarine; */
  cursor: pointer;
}
.nav-links a:hover{
  /* background-color: rgb(172, 233, 213); */
  cursor: pointer;
  border-radius: 5px;
}

.right-tools {
  display: flex;
  gap: 15px;
}

.login-button {
  margin-right: 4rem;
    margin-top: 3px;
  background: white;
  color: black;
  border: none;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}
.weather{
    margin-right: 10rem;
    margin-top: 3px;
    font-size: 1.5rem;
    right: 55.5px;
    position: absolute;
    color: black;
    background: none;
    border: none;
    /* font-weight: bold; */

}

.theme-toggle {
  position: absolute;
  right: 11rem;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
}

.hero-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  text-align: center;
  z-index: 2;
}

.hero-text h1 {
  width: 60rem;
  height: 20rem;
  font-size: 4rem;
  line-height: 1.2;
  font-weight: bold;
  margin-top: 10rem;
  /* background-color: red; */
}

.image-columns {
  display: flex;
  height: 100vh;
  width: 100%;
}

.image-box {
  flex: 1;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
}

.label {
  font-size: 1.6rem;
  font-weight: bold;
  right: 10rem;
  margin-bottom: 40px;
  /* background-color: rgba(0, 0, 0, 0.4); */
  padding: 10px 20px;
  border-radius: 20px;
  position: relative;
}
.label:hover{
  background-color: aquamarine;
  cursor: pointer;
}
.image-columns span{
  bottom: 20px;
  font-size: 3rem;
  left: 28rem;
  position: absolute;
}
</style>
