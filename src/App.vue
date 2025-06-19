  <script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Auth from './components/Auth.vue';
  import Province from './components/Province.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Auth,
      Province

    }
  }
</script>

<template>
  <Header />

  <router-view />
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}


.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>



