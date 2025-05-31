<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Only use ONE .env variable
const baseApi = import.meta.env.VITE_API_BASE_URL

const journals = ref([])

onMounted(async () => {
    try {
        const res = await axios.get(`${baseApi}/api/journals`)
        console.log('✅ Loaded:', res.data) // ⬅️ Check if logs data
        journals.value = res.data.map(j => ({
            ...j,
            images: Array.isArray(j.images) ? j.images : JSON.parse(j.images || '[]'),
            mentions: Array.isArray(j.mentions) ? j.mentions : JSON.parse(j.mentions || '[]'),
        }))
    } catch (err) {
        console.error('❌ Failed to fetch journals:', err)
    }
})

function getImageUrl(img) {
    return `${baseApi}/storage/${img}`
}
</script>

<template>
    <div class="journal-grid">
        <div v-for="journal in journals" :key="journal.id" class="journal-box">
            <div v-if="Array.isArray(journal.images) && journal.images.length">
                <img v-for="(img, i) in journal.images" :key="i" :src="getImageUrl(img)" alt="journal image"
                    class="data-image" />
            </div>

            <div class="journal-body">
                <div class="journal-meta">
                    <div class="meta-bottom">
                        <span>{{ journal.location }}</span>
                        <span class="dot">•</span>
                        <span>{{ formatDate(journal.created_at) }}</span>
                        <span class="dot">•</span>
                        <span>{{ journal.readTime || '8 min read' }}</span>
                    </div>
                </div>

                <h3 class="title">{{ journal.title }}</h3>
                <p class="summary">{{ journal.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.journal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
}

.journal-box {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    font-family: 'Urbanist', sans-serif;
}

.data-image {
    width: 100%;
    height: 230px;
    object-fit: cover;
    margin-bottom: 6px;
}

.journal-body {
    padding: 16px;
}

.journal-meta {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: #666;
    gap: 6px;
}

.meta-bottom {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.dot {
    font-weight: bold;
    color: #999;
}

.title {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0 4px;
}

.summary {
    font-size: 14px;
    color: #444;
    margin-bottom: 8px;
}

.mentions {
    background: #f3f3f3;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #555;
}

.mention-title {
    font-weight: bold;
    margin-bottom: 4px;
}

.read-link {
    color: #007f3d;
    font-weight: 600;
    text-decoration: none;
}

.read-link i {
    margin-left: 4px;
}
</style>
