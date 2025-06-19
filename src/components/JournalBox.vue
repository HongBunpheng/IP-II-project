<template>
    <div class="journal-grid">
        <div v-for="journal in journals" :key="journal.id" class="journal-box">
            <!-- Image -->
            <div class="journal-image-wrapper">
                <img :src="getImageUrl(journal.images[0])" class="journal-image" alt="Journal Cover" />
            </div>

            <!-- Author & Meta -->
            <div class="author-meta">
                <div class="left">
                    <img :src="journal.author_avatar || 'https://i.pravatar.cc/100?img=4'" class="avatar" />
                    <div class="author-details">
                        <div class="name">{{ journal.author_name || 'Unknown' }}</div>
                        <div class="location">{{ journal.location }}</div>
                    </div>
                </div>
                <div class="right">
                    <span>{{ formatDate(journal.created_at) }}</span>
                    <span class="dot">•</span>
                    <span>{{ formatTime(journal.created_at) }}</span>
                </div>
            </div>

            <!-- Title & Content -->
            <div class="journal-body">
                <h3 class="title">{{ journal.title }}</h3>
                <p class="summary">{{ journal.content }}</p>
                <router-link :to="`/journal/${journal.id}`" class="read-link">
                    Read Full Post <i class="bi bi-box-arrow-up-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'


const baseApi = import.meta.env.VITE_API_BASE_URL
const journals = ref([])

const loadData = async (type) => {
    try {
        const res = await axios.get(`${baseApi}/api/${type}`)
        journals.value = res.data.map(j => ({
            ...j,
            images: Array.isArray(j.images) ? j.images : JSON.parse(j.images || '[]'),
            mentions: Array.isArray(j.mentions) ? j.mentions : JSON.parse(j.mentions || '[]'),
            readTime: j.read_time || 'N/A'
        }))
    } catch (err) {
        console.error(err)
        alert(`❌ Failed to load ${type}`)
    }
}

onMounted(() => {
    loadData('journals')
})

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
    const now = new Date()
    const diff = Math.floor((now - date) / 1000) // in seconds

    if (diff < 60) return `${diff} sec ago`
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) === 1 ? '' : 's'} ago`
    if (diff < 2592000) return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) === 1 ? '' : 's'} ago`
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} month${Math.floor(diff / 2592000) === 1 ? '' : 's'} ago`

    return `${Math.floor(diff / 31536000)} year${Math.floor(diff / 31536000) === 1 ? '' : 's'} ago`
}

</script>
<style scoped>
.journal-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Always 2 per row on desktop */
    gap: 40px;
    padding: 2.5rem 1rem;
    max-width: 1800px;
    margin: 0 auto;
}

.journal-box {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Urbanist', sans-serif;
    transition: transform 0.2s ease;
}

.journal-box:hover {
    transform: translateY(-6px);
}

/* Image Frame */
.journal-image-wrapper {
    width: 100%;
    aspect-ratio: 3 / 2;
    /* ✅ Maintain 3:2 ratio for all images */
    overflow: hidden;
    border-radius: 20px 20px 0 0;
}

.journal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* ✅ center image nicely */
    display: block;
}

/* Author and Date */
.author-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 1.2rem 0;
    font-size: 14px;
    color: #444;
}

.author-meta .left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.author-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.name {
    font-weight: 600;
    line-height: 1.2;
}

.location {
    color: #888;
    font-size: 13px;
    line-height: 1.2;
}

.right {
    font-size: 13px;
    color: #888;
    display: flex;
    gap: 8px;
    white-space: nowrap;
}

.dot {
    font-weight: bold;
    color: #ccc;
}

/* Journal Body */
.journal-body {
    padding: 1rem 1.2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex-grow: 1;
}

.title {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    line-height: 1.4;
}

.summary {
    font-size: 14px;
    color: #444;
    flex-grow: 1;
    line-height: 1.5;
}

.read-link {
    color: #007f3d;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;
}

.read-link i {
    margin-left: 6px;
}

/* ✅ Responsive Design: 1 card per row on mobile */
@media (max-width: 768px) {
    .journal-grid {
        grid-template-columns: 1fr;
        padding: 1.5rem 1rem;
    }

    .journal-image-wrapper {
        aspect-ratio: 4 / 3;
        /* slightly taller on mobile */
    }
}
</style>