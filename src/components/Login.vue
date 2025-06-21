<template>
  <div class="login-background">
    <div class="login-popup">
      <div class="login-container">
        <div class="left-frame">
          <div class="overlay">
            <h2>Everyday <br />Must-Haves</h2>
            <p>Access all the essentials you need for your day-to-day life.</p>
          </div>
        </div>

        <div class="right-frame">
          <img src="@/assets/picture/logo.png" alt="TripTrek Logo" class="logo" />
          <h2 class="title">Welcome Back</h2>
          <p class="subtitle">Enter your email and password to login</p>

          <form @submit.prevent="handleLogin">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" v-model="email" />
            <div v-if="loginError.email" class="error-message">{{ loginError.email }}</div>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" v-model="password" />
            <div v-if="loginError.password" class="error-message">{{ loginError.password }}</div>
            <div v-if="loginError.general" class="error-message">{{ loginError.general }}</div>

            <div class="options">
              <label class="remember">
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" class="forgot" @click.prevent="emitForgotPassword">Forgot Password</a>
            </div>

            <button type="submit" class="signin-btn">Sign In</button>
          </form>

          <p class="signup">
            Don’t have an account?
            <a href="#" @click.prevent="emitShowRegister">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL

export default {
  name: "Login",
  emits: ['show-register', 'show-forgot-password'],
  data() {
    return {
      email: "",
      password: "",
      loginError: {},
    }
  },
  methods: {
    async handleLogin() {
      this.loginError = {}

      try {
        const res = await axios.post(`${baseURL}/api/login`, {
          email: this.email,
          password: this.password
        })

        alert(res.data.message)
        localStorage.setItem('user', JSON.stringify(res.data.account))
        localStorage.setItem('token', res.data.token)
        this.email = ''
        this.password = ''
      } catch (err) {
        if (err.response && err.response.data.message) {
          this.loginError = err.response.data.message
        } else {
          this.loginError.general = "Login failed. Please try again."
        }
      }
    },
    emitShowRegister() {
      this.$emit("show-register")
    },
    emitForgotPassword() {
      this.$emit("show-forgot-password")
    },
  },
}
</script>

<style scoped>
.login-background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  height: 90vh;
  background: url('../assets/picture/login-bg.png') no-repeat center center;
  background-size: cover;
  border-radius: 32px;
}

/* Center popup on screen */
.login-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 86%;
  max-width: 760px;
  height: 80vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', sans-serif;
}

/* Flex container splits into two frames */
.login-container {
  display: flex;
  width: 100%;
  height: 100%;
}

/* Left frame with background image */
.left-frame {
  flex: 1;
  display: flex;
  align-items: flex-end;
  position: relative;

  /* Background image */
  background: url('../assets/picture/login-bg.png') no-repeat center center;
  background-size: cover;

  /* Only 3-side border */
  border-left: 8px solid white;
  border-top: 8px solid white;
  border-bottom: 8px solid white;
  border-right: none;

  border-radius: 32px 32px 32px 32px;
}

.overlay {
  padding: 1rem;
  border-radius: 12px;
  color: white;
  width: 100%;
}

.left-frame h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.left-frame p {
  font-size: 0.75rem;
}

/* Right frame with form */
.right-frame {
  flex: 1;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Logo */
.logo {
  width: 78px;
  /* smaller logo */
  margin-bottom: 0.5rem;
}

/* Welcome titles */
.title {
  font-size: 1.5rem;
  /* slightly smaller */
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-family: 'Prata', serif;
}

.subtitle {
  font-size: 0.65rem;
  color: #555;
  margin-bottom: 1.2rem;
}

/* Form styling */
form {
  width: 100%;
  max-width: 280px;
  /* narrower */
  text-align: left;
}

form label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

form input[type="email"],
form input[type="password"] {
  width: 100%;
  padding: 0.7rem;
  background: #e3e8e5;
  border: 1px #ccc;
  border-radius: 6px;
  margin-bottom: 0.6rem;
  font-size: 0.6rem;
}

/* Remember and forgot password */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
}

.options .remember {
  display: flex;
  align-items: center;
}

.options input {
  margin-right: 0.3rem;
}

.forgot {
  color: #2f6846;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.7rem;
}

/* Sign In button */
.signin-btn {
  width: 100%;
  padding: 0.6rem;
  background: #2f7a4f;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: background 0.3s;
}

.signin-btn:hover {
  background: #256c45;
}

/* Divider */
.divider {
  display: flex;
  max-width: 220px;
  align-items: center;
  text-align: center;
  margin: 0.5rem 0;
  width: 100%;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #000;
}

.divider span {
  padding: 0 1rem;
  font-size: 0.85rem;
  color: #000;
  font-weight: 500;
  white-space: nowrap;
}

/* Social Buttons */
.social-button {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  max-width: 280px;
  padding: 0.3rem 3.2rem;
  border: 1px solid;
  border-radius: 5px;
  margin: 0.35rem auto;
  font-size: 0.7rem;
  background-color: white;
}

.social-button .icon {
  margin-right: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border-radius: 50%;
  /* background-color: #f0f0f0; */
  padding: 0.4rem;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;
}

.social-button:hover .icon {
  background-color: #e0e0e0;
}

.social-button:hover {
  background-color: #f0f0f0;
}

.social-button .text {
  flex-grow: 1;
  text-align: left;
}

.social-button img {
  width: 16px;
  height: 16px;
}

.social-button.google,
.social-button.facebook,
.social-button.twitter {
  border-color: #7a967d;
}

/* Sign up */
.signup {
  margin-top: 1rem;
  font-size: 0.75rem;
  text-align: center;
}

.signup a {
  font-weight: 600;
  color: #2f6846;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .left-frame {
    height: 160px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }

  .right-frame {
    padding: 1.5rem 1rem;
  }

  .social-button {
    max-width: 100%;
  }
}
</style>