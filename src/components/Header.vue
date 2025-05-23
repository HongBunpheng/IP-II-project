<template>
  <header class="header">
    <div class="top-header">
      <div class="search-bar">
        <i class="bi bi-search-heart search-icon"></i>
        <input type="text" placeholder="Enter destination" class="searchBox" />
      </div>

      <div class="logo">
        <img src="@/assets/logo.png" alt="TripTrek Logo" />
      </div>

      <div class="other-links">
        <i class="bi bi-bell"></i>
        <i class="bi bi-moon-stars"></i>
        <div class="user-account">Login</div>
      </div>
    </div>

    <nav class="nav-links">
      <router-link to="/explore" class="nav-link">Explore</router-link>
      <router-link to="/journal" class="nav-link">Journal</router-link>
      <router-link to="/budget" class="nav-link">Budget</router-link>
      <router-link to="/game" class="nav-link">Game</router-link>
      <router-link to="/about" class="nav-link">About us</router-link>
    </nav>
  </header>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'HeaderNavigationBar',
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.header {
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
}

.top-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  background-color: #25d3b7;
  box-shadow: 0 4px 2px rgba(10, 10, 10, 0.196);
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 8px 15px;
  border-radius: 9px;
  gap: 10px;
  margin-left: 10px;
  height: 35px;
  width: 230px;
  z-index: 10;
}

.search-icon {
  font-size: 1rem;
  color: #666;
}

.searchBox {
  border: none;
  outline: none;
  font-size: 10px;
  width: 100%;
  margin-top: 3px;
}

.logo {
  width: 100px;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.logo img {
  width: 70px;
}

.other-links {
  display: flex;
  align-items: center;
  margin-right: 10px;
  gap: 15px;
  z-index: 10;
}

.bi {
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
}

.search-icon {
  font-size: 1rem;
  color: #666; /* Medium gray works well on white background */
}

.user-account {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 600;
  width: 110px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: white;
  padding: 12px 0;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: black;
  font-weight: 640;
  font-size: 17px;
}

.nav-link:hover {
  color: #2ad1ae;
  border-radius: 20px;
  padding: 5px 15px;
}
</style>
