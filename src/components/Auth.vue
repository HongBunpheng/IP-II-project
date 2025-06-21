<template>
  <div>
    <Login v-if="showLogin" @show-register="toggleRegister(true)" @show-forgot-password="showForgotPassword = true" />

    <Register v-if="showRegister" @close="toggleRegister(false)"
      @show-login="showLogin = true; resetAllOtherViews();" />

    <ForgotPassword v-if="showForgotPassword" @show-verify-code="toVerifyCode"
      @show-login="showLogin = true; resetAllOtherViews();" @go-back="showForgotPassword = false; showLogin = true;" />

    <VerifyCode v-if="showVerifyCode" :email="resetEmail" @show-reset-password="toResetPassword"
      @show-login="showLogin = true; resetAllOtherViews();"
      @go-back="showVerifyCode = false; showForgotPassword = true;" />

    <ResetPassword v-if="showResetPassword" :email="resetEmail" :code="resetCode"
      @show-login="showLogin = true; resetAllOtherViews();"
      @go-back="showResetPassword = false; showVerifyCode = true;" />
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
      showLogin: true,
      showRegister: false,
      showForgotPassword: false,
      showVerifyCode: false,
      showResetPassword: false,
      resetEmail: '',
      resetCode: '',
    };
  },
  methods: {
    toggleRegister(value) {
      this.resetAllOtherViews();
      this.showRegister = value;
      this.showLogin = !value;
    },
    resetAllOtherViews() {
      this.showRegister = false;
      this.showForgotPassword = false;
      this.showVerifyCode = false;
      this.showResetPassword = false;
    },
    toVerifyCode(email) {
      this.resetEmail = email;            // ✅ capture email
      this.showForgotPassword = false;
      this.showVerifyCode = true;
    },
    toResetPassword({ email, code }) {
      this.resetEmail = email;           // ✅ capture email again
      this.resetCode = code;             // ✅ capture code
      this.showVerifyCode = false;
      this.showResetPassword = true;
    }
  },
};
</script>
