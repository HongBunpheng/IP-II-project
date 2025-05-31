<template>
  <div class="journal-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-overlay">
        <h1 class="hero-title">
          Take the time to create more<br />
          memorable and meaningful<br />
          memories
        </h1>
      </div>
    </div>

    <!-- Journal Header -->
    <section class="journal-section">
      <div class="journal-text">
        <h2>Top Travel Journals</h2>
        <p>Explore our latest stories from our active users</p>
      </div>
    <router-link to="/CreatePost" class="create-post-btn">
      <span>✏️</span> Create Post
    </router-link>
    </section>

    <!-- Journal List -->
    <JournalBox :journals="journals" />

  </div>
</template>

<script>
import JournalBox from '../components/JournalBox.vue'
import CreatePost from '@/components/CreatePost.vue'
import ReadFullPost from '@/components/ReadFullPost.vue'

export default {
  name: 'JournalPage',
  components: {
    JournalBox,
    CreatePost,
    ReadFullPost,
  },
  data() {
    return {
      showCreatePost: false,
      showReadFullPost: false,
      journals: [

        
      ]
    }
  }
}
</script>


<style scoped>
.journal-page {
  font-family: 'Poppins', sans-serif;
  color: #111;
}

.hero-section {
  position: relative;
  background-image: url('/src/assets/j1.png'); 
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  padding: 2rem;
  border-radius: 12px;
}

.hero-title {
  font-size: 60px;
  font-weight: 700;
  color: white;
  line-height: 1.4;
}

.journal-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
}

.journal-text h2 {
  font-size: 1.8rem;
  margin: 0;
}

.journal-text p {
  margin-top: 0.5rem;
  color: #555;
}

.create-post-btn {
  border: 2px solid #0aa06e;
  background: transparent;
  color: #0aa06e;
  padding: 0.6rem 1.4rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.create-post-btn:hover {
  background: #0aa06e;
  color: white;
}

</style>
