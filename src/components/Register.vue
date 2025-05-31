<template>
  <div class="signup-background">
    <div class="signup-popup">
      <div class="signup-container">
        <!-- Left Frame -->
        <div class="left-frame">
          <img src="@/assets/logo.png" alt="TripTrek Logo" class="logo" />
          <h2 class="title">Hello User!</h2>
          <p class="subtitle">Enter below details to create an account</p>

          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" v-model="fullName" placeholder="Enter your full name" required />
            </div>
            <div class="form-group">
              <label for="email">Mail</label>
              <input type="email" id="email" v-model="email" placeholder="Enter your mail" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" placeholder="Enter password" required />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required />
            </div>

            <div v-if="signUpError.password" class="error-message">{{ signUpError.password }}</div>
            <div v-if="signUpError.confirmpassword" class="error-message">{{ signUpError.confirmpassword }}</div>
            <div v-if="signUpError.email" class="error-message">{{ signUpError.email }}</div>
            <div v-if="signUpError.general" class="error-message">{{ signUpError.general }}</div>

            <button type="submit" class="signup-button">Sign Up</button>
          </form>

          <div class="divider">
            <span>Or</span>
          </div>

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
            <a href="#" @click.prevent="$emit('show-login')">Login Here</a>
          </p>
        </div>

        <!-- Right Frame -->
        <div class="right-frame">
          <div class="overlay">
            <h2>Unleash Your<br />Shopping Spirit!</h2>
            <p>
              Unleash Your Shopping Spirit! and discover a world filled with exciting products and exclusive deals that transform shopping from a chore into a joyful adventure, tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export default {
  emits: ['close'],
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      signUpError: {},
    };
  },
  methods: {
    async handleSubmit() {
      this.signUpError = {}

      if (this.password !== this.confirmPassword) {
        this.signUpError.confirmpassword = "Passwords do not match";
        return;
      }

      try {
        await axios.post(`${baseURL}/api/accounts`, {
          name: this.fullName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        });

        alert('✅ Registered successfully!');
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
      } catch (err) {
        if (err.response && err.response.data.errors) {
          this.signUpError = err.response.data.errors;
        } else {
          this.signUpError.general = "Something went wrong. Please try again.";
        }
      }
    }
  }
}
</script>

  
  <style scoped>
.signup-background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 860px;
  height: 90vh;
  background: url('../assets/register-bg.png') no-repeat center center;
  background-size: cover;
  border-radius: 32px;
}

.signup-popup {
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
  box-shadow: 0 10px 50px rgba(251, 250, 250, 0);
  font-family: 'Segoe UI', sans-serif;
}

.signup-container {
  display: flex;
  width: 100%;
  height: 100%;
}

/* Left side: Form Section */
.left-frame {
  flex: 1;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo {
  width: 78px;
  margin-bottom: 0.2rem;
}

.title {
  font-size: 1.5rem; /* slightly smaller */
  font-weight: bold;
  margin-bottom: 0.2rem;
  margin-top: 0.5rem;
  font-family: 'Prata', serif;
}

.subtitle {
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 1.2rem;
}

form {
  width: 100%;
  max-width: 280px;
  text-align: left;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-group label {
  display: block;
  color: rgb(58, 46, 46);
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.7rem;
  background: #e3e8e5;
  border: 1px #ccc;
  border-radius: 6px;
  font-size: 0.6rem;
}

/* Signup button */
.signup-button {
  width: 100%;
  padding: 0.6rem;
  background: #2f7a4f;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.signup-button:hover {
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

/* Right side: Background section */
.right-frame {
  flex: 1;
  display: flex;
  align-items: flex-end;
  position: relative;

  /* Background image */
  background: url('../assets/register-bg.png') no-repeat center center;
  background-size: cover;

  /* Only 3-side border */
  border-right: 8px solid white;
  border-top: 8px solid white;
  border-bottom: 8px solid white;
  border-left: none;

  border-radius: 32px 32px 32px 32px;
}

.overlay {
  padding: 1rem;
  border-radius: 12px;
  color: white;
  width: 100%;
}

.right-frame h2 {
  font-family: 'Prata', serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.right-frame p {
  font-size: 0.75rem;
}

/* Responsive */
@media (max-width: 768px) {
  .signup-container {
    flex-direction: column-reverse;
    height: auto;
  }

  .right-frame {
    height: 160px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }

  .left-frame {
    padding: 1.5rem 1rem;
  }

  .social-login {
    flex-wrap: wrap;
    gap: 0.6rem;
  }
}
  </style>