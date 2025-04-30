<template>
  <div id="app">
    <!-- <JournalBox /> -->
    <!-- <ChatBot /> -->
    <Search />
    <!-- <calendar /> -->

  </div>
</template>

<script>

// import ChatBot from './components/chatBot.vue';
// import JournalBox from './components/JournalBox.vue';
// import Calendar from './components/KhmerEventCalendar.vue';
import Search from './components/search.vue';


export default {
  name: 'App',
  components: {
    // ChatBot,
    // JournalBox,
    // Calendar,
    Search,
  }
}
</script>


<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f7f7;
}

/* Center the content */
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 100vh;
  padding: 20px;
}

/* Title style */
.title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}
</style>
