<template>
  <header class="header">
    <div class="top-header">
      <div class="search-bar">
        <i class="bi bi-search-heart search-icon"></i>
        <input type="text" placeholder="Enter destination" class="searchBox" />
      </div>

      <div class="logo">
<<<<<<< HEAD
        <img src="@/assets/logo.png" alt="TripTrek Logo" />
=======
        <img src="@/assets/picture/logo-white.png" alt="TripTrek Logo" />
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
      </div>

      <div class="other-links">
        <i class="bi bi-bell"></i>
        <i class="bi bi-moon-stars"></i>
<<<<<<< HEAD
        <div class="user-account">Login</div>
=======

        <!-- 👇 Login / Profile switch -->
        <div v-if="!isLoggedIn" class="user-account" @click="showAuthPopup = true">Login</div>
        <div v-else class="user-account" @click="goToProfile">
          <img :src="profileImage ? `${baseURL}/${profileImage}` : defaultImage" alt="Profile" class="avatar-circle" />
        </div>
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
      </div>
    </div>

    <nav class="nav-links">
      <router-link to="/explore" class="nav-link">Explore</router-link>
      <router-link to="/journal" class="nav-link">Journal</router-link>
      <router-link to="/budget" class="nav-link">Budget</router-link>
      <router-link to="/game" class="nav-link">Game</router-link>
      <router-link to="/about" class="nav-link">About us</router-link>
    </nav>
<<<<<<< HEAD
=======

    <!-- 👇 Popup Auth -->
    <div class="popup-overlay" v-if="showAuthPopup">
      <div class="popup-auth-box">
        <Auth @loginSuccess="handleLoginSuccess" />
        <button class="close-btn" @click="showAuthPopup = false">✖</button>
      </div>
    </div>
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
  </header>
</template>

<script>
<<<<<<< HEAD
=======
import Auth from '@/components/Auth.vue'
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'HeaderNavigationBar',
<<<<<<< HEAD
=======
  components: { Auth },
  data() {
    return {
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
      showAuthPopup: false,
      profileImage: '',
      user: {},
      isLoggedIn: false
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
    },

    getProfileImage(imagePath) {
      if (!imagePath) {
        return new URL('@/assets/pf.png', import.meta.url).href;
      }

      // If it's already a full URL or starts with http(s), return it directly
      if (imagePath.startsWith('http') || imagePath.startsWith('/images')) {
        return `${this.baseURL}/${imagePath.replace(/^\/+/, '')}`;
      }

      // If it's a local fallback path
      return new URL(`@/assets/${imagePath}`, import.meta.url).href;
    },

    goToProfile() {
      this.$router.push('/profile')
    }
  }
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
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

<<<<<<< HEAD
=======
.pf-thumb {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-auth-box {
  background: white;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  width: 400px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
.top-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
  padding: 12px 30px;
=======
  padding: 15px 30px;
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
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
<<<<<<< HEAD
  width: 100px;
  height: auto;
=======
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.logo img {
<<<<<<< HEAD
  width: 70px;
=======
  width: 100%;
  padding: 10px;
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
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
<<<<<<< HEAD
  color: #666; /* Medium gray works well on white background */
=======
  color: #666;
  /* Medium gray works well on white background */
>>>>>>> 19f6938513923e8e2a6dace98c7d7e9cbd2fdf87
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
