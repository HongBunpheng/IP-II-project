<template>
    <form class="form-grid" @submit.prevent="handleSubmit">
        <!-- Image Upload Section -->
        <div class="image-upload">
            <input type="file" multiple @change="handleFiles" ref="fileInput" hidden />
            <label class="upload-box" v-if="!previews.length" @click="triggerFilePicker">
                <i class="bi bi-camera" style="font-size: 2rem;"></i>
                <p>Click to upload photos</p>
            </label>
            <div v-if="previews.length" class="masonry-grid">
                <div v-for="(img, i) in previews" :key="i" :class="['masonry-item', i === 0 ? 'large' : '']">
                    <img :src="img" />
                    <button class="remove-btn" @click.prevent="removeImage(i)">×</button>
                </div>
            </div>
            <button type="button" class="add-btn" v-if="previews.length" @click="triggerFilePicker">+ Add More
                Photos</button>
        </div>

        <!-- Text Fields -->
        <div class="form-fields">
            <label>Title of your review</label>
            <input v-model="title" type="text" placeholder="Summarize your Travel Journey" required />

            <label>Your review</label>
            <textarea v-model="content" placeholder="A detailed review of your Travel Journey." required></textarea>

            <!-- Location -->
            <label>Location</label>
            <div class="location-input-group">
                <input v-model="location" type="text" placeholder="Enter a location" class="location-input"
                    @input="searchLocations" />
                <button type="button" class="use-location-btn" @click="getCurrentLocation">📍 Use My Location</button>
            </div>
            <ul v-if="locationSuggestions.length" class="suggestion-dropdown">
                <li v-for="loc in locationSuggestions" :key="loc" @click="selectLocation(loc)">
                    {{ loc }}
                </li>
            </ul>

            <!-- Mentions -->
            <label>Tag a friend in this journal</label>
            <input v-model="mention" type="text" placeholder="Type friend's name" @input="searchUsers" />
            <ul v-if="mentionSuggestions.length" class="suggestion-dropdown">
                <li v-for="user in mentionSuggestions" :key="user.id" @click="addMention(user)">
                    {{ user.name }}
                </li>
            </ul>

            <!-- Agreement -->
            <div class="terms">
                <input type="checkbox" id="agree" v-model="agreed" />
                <label for="agree">
                    I certify this review is based solely on my own experience and no affiliation/payment was involved.
                </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="!agreed">Submit Review</button>
            <p class="error-msg" v-if="formError">{{ formError }}</p>
            <p class="success-msg" v-if="message">{{ message }}</p>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const baseApi = import.meta.env.VITE_API_BASE_URL

const title = ref('')
const content = ref('')
const location = ref('')
const mention = ref('')
const mentions = ref([])
const files = ref([])
const previews = ref([])
const locationSuggestions = ref([])
const mentionSuggestions = ref([])
const agreed = ref(false)
const message = ref('')
const formError = ref('')
const fileInput = ref(null)
const router = useRouter()

const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files)
    newFiles.forEach(file => {
        const reader = new FileReader()
        reader.onload = e => previews.value.push(e.target.result)
        reader.readAsDataURL(file)
    })
    files.value.push(...newFiles)
}

const triggerFilePicker = () => fileInput.value?.click()
const removeImage = i => {
    previews.value.splice(i, 1)
    files.value.splice(i, 1)
}

const addMention = (user) => {
    if (!mentions.value.includes(user.id)) mentions.value.push(user.id)
    mention.value = ''
    mentionSuggestions.value = []
}

const handleSubmit = async () => {
    formError.value = ''
    message.value = ''

    if (!title.value || !content.value || !location.value || !agreed.value) {
        formError.value = '❌ Please fill all required fields.'
        return
    }

    const formData = new FormData()
    formData.append('title', title.value)
    formData.append('content', content.value)
    formData.append('location', location.value)
    mentions.value.forEach((id, i) => formData.append(`mentions[${i}]`, id))
    files.value.forEach(file => formData.append('images[]', file))

    console.log("📦 FormData Content:");
    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }

    try {
        const res = await axios.post(`${baseApi}/api/journals`, formData)

        message.value = res.data.message || '✅ Journal saved!'
        title.value = ''
        content.value = ''
        location.value = ''
        mention.value = ''
        mentions.value = []
        files.value = []
        previews.value = []
        agreed.value = false

        setTimeout(() => router.push('/journal'), 1000)
    } catch (err) {
        formError.value = err.response?.data?.message || 'Submission failed. Try again.'
    }
}
</script>

<style scoped>
.form-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

@media (min-width: 768px) {
    .form-grid {
        flex-direction: row;
        gap: 60px;
    }
}

.image-upload {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.upload-box {
    width: 100%;
    height: 250px;
    background-color: #e5e5e5;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: #555;
}

.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: 120px;
    gap: 10px;
}

.masonry-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.masonry-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
}

.masonry-item.large {
    grid-column: span 2;
    grid-row: span 2;
    height: 250px;
}

.remove-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
}

.add-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    align-self: start;
}

.add-btn:hover {
    background-color: #0056b3;
}

.form-fields {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-fields input,
.form-fields textarea,
.form-fields select {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

textarea {
    min-height: 100px;
    resize: vertical;
}

.location-label {
    display: block;
    font-weight: 500;
}

.location-input-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 0.3rem;
}

.location-input {
    flex: 1;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

.use-location-btn {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
}

.use-location-btn:hover {
    background-color: #e2e2e2;
}

.suggestion-dropdown {
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    max-height: 150px;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
}

.suggestion-dropdown li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
}

.suggestion-dropdown li:hover {
    background-color: #f9f9f9;
}

.terms {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
}

.terms input {
    width: 68px;
    height: 25px;
    cursor: pointer;
}

.submit-btn {
    background-color: #198754;
    color: white;
    border: none;
    padding: 12px 32px;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:disabled {
    background-color: #bbb;
    cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
    background-color: #157347;
}

.error-msg {
    color: red;
    font-size: 0.95rem;
}

.success-msg {
    color: green;
    font-size: 0.95rem;
}
</style>