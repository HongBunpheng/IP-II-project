<template>
  <div v-if="journal" class="read-post">
    <!-- 📸 Header -->
    <div class="read-header">
      <img src="../assets/picture/Readfullpost.png" alt="Read Image" />
    </div>

    <!-- 👤 Author Info -->
    <div class="author-box">
      <img
        :src="authorAvatar ? `${baseApi}/${authorAvatar}` : defaultImage"
        class="avatar"
        alt="Author"
      />
      <div class="info">
        <h4>{{ authorName }}</h4>
        <p><i class="bi bi-geo-alt-fill"></i> {{ journal.location }}</p>
      </div>
    </div>

    <!-- 📝 Title & Content -->
    <h2 class="title">{{ journal.title || 'Untitled' }}</h2>
    <p class="content">{{ journal.content || 'No content available.' }}</p>

    <!-- 🖼️ Image Collage -->
    <div class="image-collage">
      <div v-if="journal.images.length === 1" class="one-image">
        <img :src="getImageUrl(journal.images[0])" />
      </div>
      <div v-else-if="journal.images.length === 2" class="two-images">
        <img v-for="(img, i) in journal.images" :key="i" :src="getImageUrl(img)" />
      </div>
      <div v-else-if="journal.images.length % 2 === 1" class="odd-images">
        <div class="left-column">
          <img :src="getImageUrl(journal.images[0])" />
        </div>
        <div class="right-column">
          <img v-for="(img, i) in journal.images.slice(1)" :key="i" :src="getImageUrl(img)" />
        </div>
      </div>
      <div v-else class="even-grid">
        <img v-for="(img, i) in journal.images" :key="i" :src="getImageUrl(img)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const baseApi = import.meta.env.VITE_API_BASE_URL
const defaultImage = new URL('@/assets/pf.png', import.meta.url).href

const journal = ref({
  images: [],
  mentions: [],
  location: '',
  title: '',
  content: '',
  account: {}
})

const authorName = ref('Unknown')
const authorAvatar = ref(null)

function getImageUrl(path) {
  return `${baseApi}/${path}`
}

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await axios.get(`${baseApi}/api/journals/${id}`)
    const j = res.data

    journal.value = {
      ...j,
      images: Array.isArray(j.images) ? j.images : JSON.parse(j.images || '[]'),
      mentions: Array.isArray(j.mentions) ? j.mentions : JSON.parse(j.mentions || '[]'),
    }

    authorName.value = j.account?.name || 'Unknown'
    authorAvatar.value = j.account?.profile_picture || null
  } catch (err) {
    console.error('❌ Failed to load journal:', err)
  }
})
</script>

<style scoped>
.read-post {
    max-width: 1700px;
    margin: 0 auto;
    padding: 0rem 1rem 3rem;
    font-family: 'Urbanist', sans-serif;
}

.read-header {
    width: 100vw;
    /* ✅ full browser width */
    height: 100%;
    /* ✅ fixed height */
    overflow: hidden;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}

.read-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.author-box {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 1rem;
    margin-top: 3rem;
}

.avatar {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 50%;
}

.info h4 {
    margin: 0;
    font-size: 18px;
}

.info p {
    font-size: 14px;
    color: #666;
    margin: 2px 0 0;
}

.title {
    font-size: 22px;
    font-weight: 700;
    margin: 1.2rem 0 0.5rem;
}

.content {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 2.5rem;
}

.image-collage {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* 1 image: centered */
.one-image {
    display: flex;
    justify-content: center;
}

.one-image img {
    width: 50%;
    height: auto;
    border-radius: 12px;
}

/* 2 images: side by side */
.two-images {
    display: flex;
    gap: 12px;
}

.two-images img {
    width: 50%;
    object-fit: cover;
    height: 800px;
    border-radius: 12px;
}

/* 3 images: left full, right stacked */
.odd-images {
    display: flex;
    gap: 12px;
}

.left-column {
    flex: 1.3;
    /* slightly larger than right */
}

.left-column img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
}

.right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.right-column img {
    width: 100%;
    height: calc(50% - 6px);
    object-fit: cover;
    border-radius: 12px;
}

/* 4+ images: grid 2 column */
.even-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.even-grid img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    border-radius: 12px;
}

/* Optional Responsive Handling */
@media (max-width: 768px) {

    .one-image img,
    .two-images img {
        width: 100%;
    }

    .odd-images {
        flex-direction: column;
    }

    .left-column img,
    .right-column img,
    .even-grid img {
        height: auto;
    }

    .even-grid {
        grid-template-columns: 1fr;
    }
}
</style>