<template>
  <div class="journal-list">
    <div class="grid-container">
      <div
        class="journal-box"
        v-for="journal in journals"
        :key="journal.id"
      >
        <!-- Cover Image -->
        <img
          v-if="journal.cover_image"
          :src="`http://localhost:8000/storage/${journal.cover_image}`"
          alt="Cover"
          class="cover-image"
        />

        <div class="journal-details">
          <!-- Author Info -->
          <div class="author-section">
            <div class="author-top-row">
              <img
                v-if="journal.author_avatar"
                :src="`http://localhost:8000/storage/${journal.author_avatar}`"
                alt="Author"
                class="author-avatar"
              />
              <div class="author-name">{{ journal.author_name || 'Unknown Author' }}</div>
            </div>

            <div class="location-date-row">
              <div class="location">{{ journal.location }}</div>
              <div class="date-read">
                <span>{{ formatDate(journal.travel_date) }}</span>
                <span class="dot">•</span>
                <span>{{ journal.read_time || '5 min read' }}</span>
              </div>
            </div>
          </div>

          <!-- Title & Content -->
          <h2 class="title">{{ journal.title }}</h2>
          <p class="description">
            {{ journal.content.length > 100 ? journal.content.slice(0, 100) + '...' : journal.content }}
          </p>

          <!-- Read More -->
          <router-link :to="`/ReadFullPost/${journal.id}`" class="read-post-container">
            Read Full Post <span class="arrow">↗</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalBox',
  props: {
    journals: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(dateStr) {
      if (!dateStr) return '';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    }
  }
}
</script>

<style scoped>
.journal-list {
  padding: 48px 24px;
  max-width: 1800px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  gap: 40px;
}

.journal-box {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cover-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 15px 15px 15px 15px;
  display: block;
}

.journal-details {
  padding: 32px;
}

.author-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  width: 100%;
}

.author-top-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-weight: 600;
  font-size: 18px;
  color: #111;
}

.location-date-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #666;
  width: 100%;
}

.location {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.date-read {
  display: flex;
  gap: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  align-items: center;
}

.dot {
  font-size: 10px;
}

.title {
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin: 20px 0 12px 0;
}

.description {
  font-size: 17px;
  color: #444;
  margin-bottom: 28px;
}

.read-post-container {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 600;
  color: #007848;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: 12px;
}

.read-post-container:hover {
  color: #005e37;
}

.read-post-container .arrow {
  font-size: 22px;
  transform: translateY(-1px);
  transition: transform 0.3s ease;
}

.read-post-container:hover .arrow {
  transform: translateX(4px) translateY(-4px);
}

@media (max-width: 768px) {
  .journal-details {
    padding: 20px;
  }

  .title {
    font-size: 22px;
  }

  .description {
    font-size: 15px;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }
}
</style>
