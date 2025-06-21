<template>
  <div class="journal-page">
    <div class="journal-header">
      <img src="../assets/picture/Journal.png" alt="Journal Image" />
      <div class="journal-text">
        <h1>Take the time to create more memorable and meaningful memories</h1>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="top-bar">
        <div class="header-banner">
          <h1>Top Travel Journals</h1>
          <p>Explore our latest stories from our active users</p>
        </div>
        <router-link to="/create" class="create-button">
          <i class="bi bi-plus-circle"></i> Create Post
        </router-link>
      </div>
      <JournalBox :journals="journals" />

    </div>

  </div>
</template>

<script>
import JournalBox from '@/components/JournalBox.vue';

export default {
  components: {
    JournalBox
  }
};
</script>

<style scoped>
.journal-page {
  width: 100%;
  overflow-x: hidden;
}

.journal-header {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.journal-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.journal-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 90%;
  padding: 0 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.6);
  font-size: clamp(1rem, 3vw, 2rem);
  line-height: 1.5;
}

.content-wrapper {
  max-width: 1800px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

.top-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .top-bar {
    flex-direction: row;
    align-items: center;
  }

  .journal-text {
    font-size: 2.2rem;
  }
}

.header-banner h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #222;
}

.header-banner p {
  font-size: 1rem;
  color: #555;
}

.create-button {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  background-color: white;
  color: #28a745;
  border: 2px solid #28a745;
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  gap: 8px;
  transition: all 0.3s ease;
}

.create-button:hover {
  background-color: #28a745;
  color: white;
}

@media (max-width: 768px) {
  .journal-grid {
    grid-template-columns: 1fr;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>