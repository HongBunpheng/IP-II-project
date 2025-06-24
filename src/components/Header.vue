<template>
  <header class="header">
    <div class="top-header">
      <div class="search-bar">
        <input type="text" placeholder="Enter destination" class="searchBox" />
      </div>

      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/picture/logo-white.png" alt="TripTrek Logo" />
        </router-link>
      </div>

      <div class="other-links">
        <i class="bi bi-bell" @click="toggleNotification"></i>
        <i class="bi bi-moon-stars" @click="toggleWeather"></i>

        <!-- Login / Profile -->
        <div v-if="!isLoggedIn" class="user-account" @click="showAuthPopup = true">Login</div>
        <div v-else @click="goToProfile">
          <img :src="user.profile_picture ? `${baseURL}${user.profile_picture}` : defaultImage" class="avatar-circle"
            alt="Profile" />
        </div>
      </div>
    </div>

    <nav class="nav-links">
      <router-link to="/explore" class="nav-link">Explore</router-link>
      <router-link to="/journal" class="nav-link">Journal</router-link>
      <router-link to="/budget" class="nav-link">Budget</router-link>
      <router-link to="/game" class="nav-link">Game</router-link>
      <router-link to="/about" class="nav-link">About us</router-link>
    </nav>

    <!-- Popup Auth -->
    <div :class="['popup-overlay', { show: showAuthPopup }]" @click.self="showAuthPopup = false">
      <div class="popup-auth-box">
        <Auth @loginSuccess="handleLoginSuccess" />
      </div>
    </div>
  </header>
</template>

<script>
import Auth from '@/components/Auth.vue'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'HeaderNavigationBar',
  components: { Auth },
  data() {
    return {
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
      showAuthPopup: false,
      isLoggedIn: false,
      showNotification: false,
      showWeather: false,
      user: {},
      defaultImage: '/src/assets/pf.png'
    }
  },
  created() {
    const token = localStorage.getItem('token')
    if (token) {
      this.fetchUserProfile()
    }
  },
  methods: {
    async fetchUserProfile() {
      try {
        const res = await axios.get(`${this.baseURL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.user = res.data
        this.isLoggedIn = true
      } catch (err) {
        console.error("Failed to load profile in header:", err)
      }
    },
    handleLoginSuccess(userData) {
      localStorage.setItem('token', userData.token)
      this.user = userData.account
      this.isLoggedIn = true
      this.showAuthPopup = false
      this.fetchUserProfile()
    },
    goToProfile() {
      this.$router.push('/profile')
    },
    toggleNotification() {
      this.showNotification = !this.showNotification
    },
    toggleWeather() {
      this.showWeather = !this.showWeather
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
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
  width: 150px;
}

.searchBox {
  border: none;
  outline: none;
  font-size: 10px;
  width: 100%;
  margin-top: 3px;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.logo img {
  width: 100px;
  height: 90px;
  padding: 5px 0;
  object-fit: contain;
}

.other-links {
  display: flex;
  align-items: center;
  margin-right: 10px;
  gap: 15px;
}

.bi {
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
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

.avatar-circle {
  margin-top: 9px;
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #ccc;
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

.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.popup-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.popup-auth-box {
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  transform: scale(0.95);
  transition: transform 0.3s ease;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.popup-overlay.show .popup-auth-box {
  transform: scale(1);
}
</style>
