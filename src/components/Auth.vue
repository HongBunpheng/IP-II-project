<template>
    <div>
      <Login 
        v-if="showLogin" 
        @show-register="toggleRegister(true)" 
        @show-forgot-password="showForgotPassword = true" 
      />
      
      <Register 
        v-if="showRegister" 
        @close="toggleRegister(false)" 
        @show-login="showLogin = true; resetAllOtherViews();" 
      />
      
      <ForgotPassword 
        v-if="showForgotPassword" 
        @show-verify-code="showVerifyCode = true" 
        @show-login="showLogin = true; resetAllOtherViews();" 
        @go-back="showForgotPassword = false; showLogin = true;" 
      />
      
      <VerifyCode 
        v-if="showVerifyCode" 
        @show-reset-password="showResetPassword = true" 
        @show-login="showLogin = true; resetAllOtherViews();" 
        @go-back="showVerifyCode = false; showForgotPassword = true;" 
      />
      
      <ResetPassword 
        v-if="showResetPassword" 
        @show-login="showLogin = true; resetAllOtherViews();" 
        @go-back="showResetPassword = false; showVerifyCode = true;" 
      />
    </div>
  </template>
  
  <script>
  import Login from './Login.vue';
  import Register from './Register.vue';
  import ForgotPassword from './ForgotPassword.vue';
  import VerifyCode from './VerifyCode.vue';
  import ResetPassword from './ResetPassword.vue';
  
  export default {
    components: {
      Login,
      Register,
      ForgotPassword,
      VerifyCode,
      ResetPassword,
    },
    data() {
      return {
        showLogin: true, // Start with the login view
        showRegister: false,
        showForgotPassword: false,
        showVerifyCode: false,
        showResetPassword: false,
      };
    },
    methods: {
      toggleRegister(value) {
        this.showRegister = value;
        this.showForgotPassword = false;
        this.showVerifyCode = false;
        this.showResetPassword = false;
        this.showLogin = false; // Close Login if switching to Register
      },
      resetAllOtherViews() {
        this.showRegister = false;
        this.showForgotPassword = false;
        this.showVerifyCode = false;
        this.showResetPassword = false;
      }
    },
  };
  </script>
