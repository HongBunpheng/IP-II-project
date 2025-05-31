<template>
  <div class="verify-background">
    <div class="verify-popup">
      <div class="verify-container">
        <!-- Left Frame -->
        <div class="left-frame">
          <div class="overlay">
            <h2>Everyday <br />Must-Haves</h2>
            <p>With just one click, access all the must-have essentials you need for your day-to-day life.</p>
          </div>
        </div>
        <!-- Right Frame -->
        <div class="right-frame">
          <img src="@/assets/logo.png" alt="TripTrek Logo" class="logo" />
          <a href="#" class="back-btn" @click="$emit('go-back')">
            <font-awesome-icon :icon="['far', 'circle-left']" /> Back</a>

          <h2 class="title">Verify Code</h2>
          <p class="subtitle">An authentication code has been sent to your email.</p>
          <form @submit.prevent="handleVerifyCode">
            <label>Enter Code</label>
            <input type="text" v-model="input" placeholder="Enter Verification Code" />

            <button type="submit" class="verify-btn">Verify</button>
            <button type="button" class="resendcode-btn" @click="handleResendCode">Resend Code</button>
          </form>

          <div class="divider"><span>Or</span></div>

          <div class="social-login">
            <a href="#" class="social-icon">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" />
            </a>
            <a href="#" class="social-icon">
              <img src="https://www.svgrepo.com/show/448224/facebook.svg" />
            </a>
            <a href="#" class="social-icon">
              <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" />
            </a>
          </div>

          <p class="login">
            Already have an account?
            <a href="#" @click="$emit('show-login')">Login Here</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL

export default {
  emits: ['go-back', 'show-reset-password', 'show-login'],
  props: ['email'], // receive from ForgotPassword.vue
  data() {
    return {
      input: "",
      error: "",
    };
  },
  methods: {
    async handleVerifyCode() {
      this.error = "";

      try {
        const res = await axios.post(`${baseURL}/api/verify-code`, {
          email: this.email,
          code: this.input,
        });

        alert(res.data.message);
        this.$emit("show-reset-password", { email: this.email, code: this.input });
      } catch (err) {
        this.error = err.response?.data?.message || "Invalid or expired code";
        console.log("Verifying with:", {
          email: this.email,
          code: this.input,
        });

      }
    },

    async handleSendCode() {
      this.loginError = {};

      try {
        const res = await axios.post(`${baseURL}/api/forgot-password`, {
          email: this.email,
        });

        alert(`Verification code sent!\nYour code is: ${res.data.code}`);
        this.$emit("show-verify-code", this.email);
      } catch (err) {
        this.loginError.email = err.response?.data?.message || "Failed to send code";
      }
    },
  },
};
</script>


<style scoped>
/* Background for the entire screen */
.verify-background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 860px;
  height: 90vh;
  background: url('../assets/verifycode-bg.png') no-repeat center center;
  background-size: cover;
  border-radius: 32px;
}

/* Center popup on screen */
.verify-popup {
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
.verify-container {
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
  background: url('../assets/verifycode-bg.png') no-repeat center center;
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
  /* reduced padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

/* Logo */
.logo {
  width: 78px;
  /* smaller logo */
  margin-bottom: 0.6rem;
}

/* Welcome titles */
.title {
  font-size: 1.5rem;
  /* slightly smaller */
  font-weight: bold;
  margin-bottom: 0.8rem;
  font-family: 'Prata', serif;
}

.subtitle {
  font-size: 0.7rem;
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

form input[type="text"] {
  width: 100%;
  padding: 0.7rem;
  background: #e3e8e5;
  border: 1px #ccc;
  border-radius: 6px;
  margin-bottom: 2.5rem;
  font-size: 0.6rem;
}

/* Send Code button */
.verify-btn {
  width: 100%;
  padding: 0.6rem;
  background: #2f7a4f;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 0.8rem;
  transition: background 0.3s;
}

.resendcode-btn {
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.6rem 4.5rem;
  background: white;
  color: #2f7a4f;
  font-weight: 600;
  font-size: 0.8rem;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.3s;
}

.back-btn {
  display: flex;
  /* Use flexbox instead of grid */
  align-items: center;
  /* Center items vertically */
  gap: 0.5rem;
  /* Adjust gap between icon and text */
  background-color: white;
  width: 100%;
  max-width: 280px;
  padding: 0.28rem;
  /* Adjust padding for better spacing */
  margin: 0.2rem auto;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  /* Remove underline from link */
}

.sendcode-btn:hover {
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

/* Social login */
.social-login {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 38px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.social-icon:hover {
  background-color: #e0e0e0;
}

.social-icon img {
  width: 16px;
  height: 16px;
}

.login {
  margin-top: 1rem;
  font-size: 0.75rem;
  text-align: center;
  color: #555;
}

.login a {
  font-weight: 600;
  color: #2f6846;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    height: auto;
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