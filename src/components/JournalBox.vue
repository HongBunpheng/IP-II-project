<template>
    <div class="journal-list">
      <div class="grid-container">
        <div
          class="journal-box"
          v-for="(journal, index) in journals"
          :key="index"
        >
          <img :src="journal.image" alt="Cover" class="cover-image" />
  
          <div class="journal-details">
            <div class="author-section">
              <img :src="journal.authorImage" alt="Author" class="author-avatar" />
              <div class="author-info">
                <div class="author-name">{{ journal.authorName }}</div>
  
                <!-- Location left + Date + ReadTime right -->
                <div class="location-date-row">
                  <div class="location">{{ journal.location }}</div>
                  <div class="date-read">
                    <span>{{ journal.date }}</span>
                    <span class="dot">•</span>
                    <span>{{ journal.readTime }}</span>
                  </div>
                </div>
  
              </div>
            </div>
  
            <h2 class="title">{{ journal.title }}</h2>
            <p class="description">{{ journal.description }}</p>
  
            <a :href="journal.link" class="read-more">
              Read Full Post <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JournalBox',
    data() {
      return {
        journals: [
          {
            image: 'https://your-image-url-1.jpg',
            authorImage: 'https://your-author-avatar-1.jpg',
            authorName: 'Mina',
            location: 'Kep Province',
            date: 'Feb 27, 2023',
            readTime: '8 min read',
            title: 'The Best Time to visit Sea',
            description: 'I had always been interested in Kep, so I decided to take a year-long journey to Cambodia...',
            link: '#'
          },
          {
            image: 'https://your-image-url-2.jpg',
            authorImage: 'https://your-author-avatar-2.jpg',
            authorName: 'Renald DeVor',
            location: 'Waterfall in Phnom Kulen, Siem Reap, Cambodia',
            date: 'Feb 27, 2023',
            readTime: '5 min read',
            title: 'The Best Time to visit Phnom Kulen',
            description: 'I had just graduated from college and decided to take a six-month solo trip...',
            link: '#'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .journal-list {
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  
  .journal-box {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
  }
  
  .cover-image {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  
  .journal-details {
    padding: 20px;
  }
  
  .author-section {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  
  .author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }
  
  .author-info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .author-name {
    font-weight: 600;
    font-size: 14px;
    color: #111;
    margin-bottom: 6px;
  }
  
  .location-date-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #666;
  }
  
  .location {
    flex: 1;
  }
  
  .date-read {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  
  .dot {
    font-size: 10px;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
    color: #111;
    margin: 16px 0 8px 0;
  }
  
  .description {
    font-size: 15px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .read-more {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    color: #008000;
    text-decoration: none;
    font-size: 15px;
  }
  
  .arrow {
    margin-left: 6px;
  }
  </style>
  