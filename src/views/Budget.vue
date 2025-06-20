<template>
  <div class="budget-page">
    <!-- Hero Section -->
    <div class="hero">
      <img src="@/assets/cover1.png" alt="Cover" class="cover-img" />
      <h1 class="hero-title">On Budget is not the problem anymore</h1>
    </div>

    <!-- Recommendation Section -->
    <section class="recommendation">
      <h2>Budget Recommendation</h2>
      <p>Select the most affordable places for fitting your budget</p>

      <!-- Tabs -->
      <div class="tabs">
        <div :class="['tab', currentTab === 'analyse' ? 'active' : '']" @click="currentTab = 'analyse'">Analyse</div>
        <div :class="['tab', currentTab === 'saved' ? 'active' : '']" @click="currentTab = 'saved'">Saved</div>
      </div>

      <!-- Form -->
      <div v-if="currentTab === 'analyse'" class="form-area">
        <div class="form-group">
          <label>Select a province:</label>
          <select v-model="province">
            <option>Phnom Penh</option>
            <option>Siem Reap</option>
            <option>Kampot</option>
            <option>Battambang</option>
            <option>Preah Sihanouk</option>
          </select>
        </div>
        <div class="form-group">
          <label>Input Amount:</label>
          <input type="number" v-model="budget" placeholder="Enter your budget" />
          <button @click="handleGo">Go</button>
        </div>
      </div>

      <!-- Results -->
      <div v-if="currentTab === 'analyse'" class="result-section">
        <h3 class="result-title">Result</h3>

        <div v-if="filteredPlaces.length === 0" class="empty-state">
          <!-- && Budget -->
          <img src="@/assets/empty-box.png" />
          <p>No places found for this budget and province.</p>
        </div>

        <div v-for="(place, index) in filteredPlaces" :key="place.id" class="place-card" :class="{ reverse: index % 2 !== 0 }">
          <div class="card-images">
          <img v-for="(img, i) in place.images" :key="i" :src="`http://localhost:8000${img} ? img : '/' + img}`" class="place-image" />
          </div>
          <div class="card-text">
            <h4 class="place-name">{{ place.name }}</h4>
            <p class="place-desc">{{ place.description }}</p>
            <div class="place-actions">
              <button class="details-btn">details</button>
              <button class="save-btn" :class="{ saved: isSaved(place.id) }" @click="toggleSave(place.id)">
                {{ isSaved(place.id) ? 'Saved' : 'Save' }}
              </button>
              <div class="stars"><span v-for="n in place.rating" :key="n">⭐</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Saved -->
      <div v-if="currentTab === 'saved'" class="saved-section">
        <h3 class="result-title">Saved Places</h3>
        <p v-if="savedPlaces.length === 0" class="result-subtitle">No saved places yet.</p>

        <div v-for="(place, index) in savedPlaces" :key="'saved-' + place.id" class="place-card" :class="{ reverse: index % 2 !== 0 }">
          <div class="card-images">
            <img v-for="(img, i) in place.images" :key="i" :src="`http://localhost:8000${img}`" class="place-image" />
          </div>
          <div class="card-text">
            <h4 class="place-name">{{ place.name }}</h4>
            <p class="place-desc">{{ place.description }}</p>
            <div class="place-actions">
              <button class="details-btn">details</button>
              <button class="save-btn saved" @click="removeSaved(place.id)">Remove</button>
              <div class="stars"><span v-for="n in place.rating" :key="n">⭐</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    <Footer />
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';

export default {
  name: 'BudgetPage',
  components: {
    Footer,
  },
  data() {
    return {
      currentTab: 'analyse',
      province: 'Phnom Penh',
      budget: '',
      filteredPlaces: [],
      savedPlaceIds: [],
    };
  },
  computed: {
    // Saved places filtered from available (filtered or all) places
    savedPlaces() {
      return this.filteredPlaces.filter(place =>
        this.savedPlaceIds.includes(place.id)
      );
    }
  },
  methods: {
    async handleGo() {
      if (!this.budget) return alert('Please enter a budget.');
      try {
        const res = await axios.get('http://localhost:8000/api/places', {
          params: { province: this.province, budget: this.budget },
        });
        this.filteredPlaces = res.data;
      } catch (err) {
        console.error('Error fetching places:', err);
      }
    },

    toggleSave(placeId) {
      if (!this.savedPlaceIds.includes(placeId)) {
        this.savedPlaceIds.push(placeId);
      } else {
        this.savedPlaceIds = this.savedPlaceIds.filter(id => id !== placeId);
      }

      // Save locally
      localStorage.setItem('savedPlaceIds', JSON.stringify(this.savedPlaceIds));
    },

    removeSaved(placeId) {
      this.savedPlaceIds = this.savedPlaceIds.filter(id => id !== placeId);
      localStorage.setItem('savedPlaceIds', JSON.stringify(this.savedPlaceIds));
    },

    isSaved(placeId) {
      return this.savedPlaceIds.includes(placeId);
    },
  },

  created() {
    const saved = localStorage.getItem('savedPlaceIds');
    if (saved) {
      this.savedPlaceIds = JSON.parse(saved);
    }
  },
};
</script>

<style scoped>
.budget-page {
  font-family: 'Poppins', sans-serif;
  color: #222;
}

.hero {
  position: relative;
  text-align: center;
}

.cover-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.recommendation {
  text-align: center;
  padding: 2rem 1rem;
}

.recommendation h2 {
  font-weight: 600;
}

.recommendation p {
  color: #555;
  margin-bottom: 1.5rem;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #00c4a7;
  margin: 4rem;
  margin-bottom: 1rem;
}

.tab {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-weight: 500;
}

.tab.active {
  color: white;
  background-color: #00c4a7;
  border-radius: 8px 8px 0 0;
}

.form-area {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input,
select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 180px;
}

button {
  background-color: #00c4a7;
  border: none;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}

.empty-state {
  margin-top: 2rem;
  height: 500px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-state img {
  margin-top: 10rem;
  width: 120px;
  opacity: 0.6;
}

.empty-state p {
  margin-top: 0.5rem;
  color: #666;
  font-size: 1rem;
}

/* Result Cards */
.result-section {
  text-align: center;
  margin-top: 2rem;
}

.result-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.result-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.place-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;
  flex-wrap: wrap;
}

.place-card.reverse {
  flex-direction: row-reverse;
}

.card-images {
  position: relative;
  width: 180px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.place-image {
  position: absolute;
  width: 150px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
}

/* First image (top) */
.place-image:nth-child(1) {
  top: 0;
  left: 20px;
  z-index: 2;
}

/* Second image (bottom) */
.place-image:nth-child(2) {
  bottom: 0;
  left: 0;
  z-index: 1;
}
/*  Hover animations */
.card-images:hover .place-image:nth-child(1) {
  transform: translateY(-10px) scale(1.05) rotate(-2deg);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.card-images:hover .place-image:nth-child(2) {
  transform: translateY(-6px) scale(1.03) rotate(3deg);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}
.card-text {
  flex: 1;
  min-width: 250px;
  text-align: left;
}

.place-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.place-desc {
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.place-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.details-btn {
  background-color: #00c4a7;
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.4rem 1.5rem;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.details-btn:hover {
  background-color: #009e87;
}

.stars {
  color: gold;
  font-size: 1rem;
}
.save-btn {
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ccc;
  padding: 0.4rem 1.2rem;
  border-radius: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.save-btn:hover {
  background-color: #00c4a7;
  color: white;
}

.save-btn.saved {
  background-color: #00c4a7;
  color: white;
  border-color: #00c4a7;
}

</style>