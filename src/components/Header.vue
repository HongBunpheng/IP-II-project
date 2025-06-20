<template>
  <header class="header">
    <div class="top-header">
      <div class="search-bar">
        <i class="bi bi-search-heart"></i>
        <input type="text" placeholder="Enter destination" class="searchBox" />
      </div>

      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/picture/logo-white.png" alt="TripTrek Logo" />
        </router-link>
      </div>

      <div class="other-links">
        <i class="bi bi-bell"></i>
        <i class="bi bi-moon-stars"></i>

        <!-- Login / Profile switch -->
        <div v-if="!isLoggedIn" class="user-account" @click="showAuthPopup = true">Login</div>
        <div v-else @click="goToProfile">
          <img :src="profileImage ? `${baseURL}/${profileImage}` : defaultImage" alt="Profile" class="avatar-circle" />
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
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'HeaderNavigationBar',
  components: { Auth },
  data() {
    return {
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
      showAuthPopup: false,
      profileImage: '',
      user: {},
      isLoggedIn: false,
      defaultImage: new URL('@/assets/pf.png', import.meta.url).href
    }
  },
  created() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))
    if (token && user && user.profile_picture) {
      this.isLoggedIn = true
      this.user = user
      this.profileImage = user.profile_picture
    }
  },
  methods: {
    handleLoginSuccess(userData) {
      localStorage.setItem('token', userData.token)
      localStorage.setItem('user', JSON.stringify(userData.account))
      this.user = userData.account
      this.isLoggedIn = true
      this.showAuthPopup = false
      this.profileImage = userData.account.profile_picture
    },
    goToProfile() {
      this.$router.push('/profile')
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
  width: 230px;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo img {
  width: 100%;
  padding: 10px;
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
