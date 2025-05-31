<template>
  <div class="journal-page">
    <div class="journal-header">
      <img src="../assets/Journal.png" alt="Journal Image" />
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
<!-- 
      <section class="journal-section">
      <div class="journal-header">
        <h2>Top Travel Journals</h2>
        <p>Explore our latest stories from our active users</p>
        <RouterLink to="/create" class="create-btn">+ Create Post</RouterLink>
      </div>

      <JournalBox :journals="journals" />
    </section> -->

      <!-- <div class="journal-grid">
        <div v-for="(journal, index) in journals" :key="index" class="journal-box">
          <img v-if="journal.images && journal.images.length" :src="journal.images[0]" class="journal-image" alt="Journal" />
          <div class="journal-info">
            <h3>{{ journal.title }}</h3>
            <p class="meta">{{ journal.location }} · {{ journal.date }} · {{ journal.read_time }}</p>
            <p>{{ journal.content.slice(0, 120) }}...</p>
            <p class="author">Written by <strong>{{ journal.author }}</strong></p>
            <div class="actions">
              <router-link :to="`/readfullpost?index=${index}`" class="read-btn">Read Full Post</router-link>
              <button @click="editJournal(index)">Edit</button>
              <button @click="deleteJournal(index)">Delete</button>
            </div>
          </div>
        </div>
      </div> -->
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
.journal-page { width: 100%; overflow-x: hidden; }
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
  max-width: 1440px;
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
  .top-bar { flex-direction: row; align-items: center; }
  .journal-text { font-size: 2.2rem; }
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

/* .journal-section {
  padding: 40px 24px;
}

.journal-header {
  text-align: center;
  margin-bottom: 30px;
}

.journal-header h2 {
  font-size: 26px;
  font-weight: 700;
}

.journal-header p {
  color: #555;
  margin-top: 8px;
}

.create-btn {
  margin-top: 12px;
  display: inline-block;
  background: #28a745;
  color: #fff;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
} */

/* .journal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  animation: fadeIn 0.6s ease-in;
}
.journal-box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
}
.journal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
}
.journal-info h3 { margin: 0 0 8px; color: #222; font-size: 1.25rem; }
.journal-info .meta { font-size: 0.85rem; color: #777; margin-bottom: 10px; }
.journal-info p { font-size: 0.95rem; color: #444; margin-bottom: 10px; }
.journal-info .author { font-size: 0.9rem; color: #666; }
.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.actions button,
.actions .read-btn {
  padding: 6px 12px;
  font-size: 0.85rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s;
}
.actions button:first-child { background: #ffc107; color: #000; }
.actions button:last-child { background: #dc3545; color: white; }
.actions .read-btn {
  background: #198754;
  color: white;
}
.actions .read-btn:hover {
  background: #157347;
} */
@media (max-width: 768px) {
  .journal-grid { grid-template-columns: 1fr; }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>