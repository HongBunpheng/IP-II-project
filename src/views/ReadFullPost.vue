<template>
    <div v-if="journal" class="read-post">
        <!-- Cover Header Image -->
        <div class="read-header">
            <img src="../assets/picture/Readfullpost.png" alt="Read Image" />
        </div>

        <!-- Author Section -->
        <div class="author-box">
            <img :src="journal.account?.profile_picture || defaultImage" class="avatar" />
            <div class="info">
                <h4>{{ journal.account?.name || 'Unknown' }}</h4>
                <p><i class="bi bi-geo-alt-fill"></i> {{ journal.location }}</p>
                <p class="meta">
                    {{ formatDate(journal.created_at) }} <span class="dot">•</span> {{ formatTime(journal.created_at) }}
                </p>
            </div>
        </div>

        <!-- Title & Content -->
        <h2 class="title">{{ journal.title || 'Untitled' }}</h2>
        <p class="content">{{ journal.content || 'No content available.' }}</p>

        <!-- Image Collage -->
        <div class="image-collage" v-if="journal.images.length">
            <!-- 1 image -->
            <div v-if="journal.images.length === 1" class="one-image">
                <img :src="getImageUrl(journal.images[0])" />
            </div>

            <!-- 2 images -->
            <div v-else-if="journal.images.length === 2" class="two-images">
                <img v-for="(img, i) in journal.images" :key="i" :src="getImageUrl(img)" />
            </div>

            <!-- Odd -->
            <div v-else-if="journal.images.length % 2 === 1" class="odd-images">
                <div class="left-column">
                    <img :src="getImageUrl(journal.images[0])" />
                </div>
                <div class="right-column">
                    <img v-for="(img, i) in journal.images.slice(1)" :key="i" :src="getImageUrl(img)" />
                </div>
            </div>

            <!-- Even -->
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
const journal = ref(null)

const baseApi = import.meta.env.VITE_API_BASE_URL
const defaultImage = new URL('@/assets/pf.png', import.meta.url).href

function getImageUrl(path) {
    return `${baseApi}/${path}`
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

function formatTime(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

onMounted(async () => {
    const id = route.params.id
    try {
        const res = await axios.get(`${baseApi}/api/journals/${id}`)
        const j = res.data
        journal.value = {
            ...j,
            images: Array.isArray(j.images) ? j.images : JSON.parse(j.images || '[]'),
            mentions: Array.isArray(j.mentions) ? j.mentions : JSON.parse(j.mentions || '[]')
        }
    } catch (err) {
        console.error('❌ Failed to load post:', err)
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
    height: 100%;
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
    background-color: #ccc;
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

.dot {
    margin: 0 6px;
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

.one-image {
    display: flex;
    justify-content: center;
}

.one-image img {
    width: 50%;
    height: auto;
    border-radius: 12px;
}

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

.odd-images {
    display: flex;
    gap: 12px;
}

.left-column {
    flex: 1.3;
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
