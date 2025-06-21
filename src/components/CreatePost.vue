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

        <!-- Location Input -->
            <div class="location-block">
                <div class="location-header">
                <span class="location-title">Location</span>
                <button class="use-location-btn" @click="getCurrentLocation">📍 Use My Location</button>
                </div>
                <div class="location-input-wrapper">
                <input
                    v-model="location"
                    type="text"
                    placeholder="Search for location..."
                    @input="fetchLocationSuggestions"
                    autocomplete="off"
                    class="location-input"
                />

                <div class="location-suggestions" v-if="locationSuggestions.length">
                    <div
                    v-for="(item, i) in locationSuggestions"
                    :key="i"
                    class="suggestion-item"
                    @click="selectLocation(item.display_name)"
                    >
                    <i :class="getIconClass(item)" class="result-icon"></i>
                        <div class="suggestion-text-block">
                            <div class="suggestion-title">{{ item.display_name }}</div>
                            <div class="suggestion-sub">{{ item.address?.state }}, {{ item.address?.country }}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <!-- Mentions -->
            <label>Tag a friend in this journal</label>
                <input
                v-model="mention"
                type="text"
                placeholder="Type friend's name"
                @input="searchUsers"
                />

                <ul v-if="mentionSuggestions.length" class="suggestion-dropdown">
                <li v-for="user in mentionSuggestions" :key="user.id" @click="addMention(user)">
                    {{ user.name }}
                </li>
                </ul>

                <div v-if="mentions.length" class="mention-list">
                <span class="mention-tag" v-for="(user, index) in mentions" :key="user.id">
                    @{{ user.name }}
                    <button @click="removeMention(index)">x</button>
                </span>
                </div>

            <!-- Agreement -->
            <div class="terms">
                <input type="checkbox" id="agree" v-model="agreed" />
                <label for="agree">
                    I certify this review is based solely on my own experience and no affiliation/payment was involved.
                </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="!agreed">Submit Review</button>
            <p v-if="formError" class="error">{{ formError }}</p>
            <p v-if="message" class="success">{{ message }}</p>

        </div>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const baseApi = import.meta.env.VITE_API_BASE_URL

const title = ref('')
const content = ref('')
const location = ref('')
const readTime = ref('')
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
// const isEditMode = ref(false)
const route = useRoute();
// const journalId = route.params.id;

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

const fetchLocationSuggestions = async () => {
  if (!location.value) return
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(location.value)} Cambodia`)
    const data = await res.json()
    locationSuggestions.value = data.filter(item => item.display_name.includes('Cambodia'))
  } catch (err) {
    console.error('Failed to fetch locations', err)
  }
}

const selectLocation = (value) => {
  location.value = value
  locationSuggestions.value = []
}

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported")
    return
  }
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      const data = await res.json()
      location.value = data.display_name
    } catch (err) {
      alert("Failed to fetch location name")
    }
  })
}

const getIconClass = (item) => {
  if (item.type.includes('museum')) return 'bi bi-bank'
  if (item.type.includes('restaurant')) return 'bi bi-egg-fried'
  if (item.type.includes('hotel')) return 'bi bi-house-door'
  if (item.type.includes('clothing')) return 'bi bi-bag'
  if (item.type.includes('province') || item.type.includes('administrative')) return 'bi bi-flag'
  return 'bi bi-geo-alt-fill'
}

function addMention(user) {
  mentions.value.push(user)
  mention.value = ''
  mentionSuggestions.value = []
}

function removeMention(index) {
  mentions.value.splice(index, 1)
}

const handleSubmit = async () => {
  // Clear previous messages
  formError.value = ''
  message.value = ''

  try {
    const formData = new FormData()
    formData.append('location', location.value)
    formData.append('title', title.value)
    formData.append('content', content.value)
    formData.append('read_time', readTime.value)

    // Attach uploaded images
    files.value.forEach((file, i) => {
      formData.append(`images[${i}]`, file)
    })

    // 🔐 Load token
    const token = localStorage.getItem('token')
    if (!token) {
      formError.value = 'User is not authenticated.'
      return
    }

    // ✅ Send POST to Laravel backend
    const response = await axios.post(`${baseApi}/api/journals`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      }
    })

    console.log('✅ Submission response:', response)
    message.value = 'Journal submitted successfully!'
  } catch (err) {
    console.error('❌ Axios error submitting journal:', err)
    if (err.response?.status === 401) {
      formError.value = 'Unauthenticated: Please log in again.'
    } else if (err.response?.data?.message) {
      formError.value = err.response.data.message
    } else {
      formError.value = 'Submission failed. Please try again.'
    }
  }
}

// onMounted(async () => {
//   if (journalId) {
//     try {
//       const response = await axios.get(`${baseApi}/api/journals/${journalId}`);
//       const journal = response.data;

//       // preload form data
//       caption.value = journal.caption;
//       location.value = journal.location;
//       mentions.value = journal.mentions;
//       selectedImages.value = journal.images; // check if this format matches

//     } catch (error) {
//       console.error("❌ Failed to load journal data for editing", error);
//     }
//   }
// });

onMounted(async () => {
  const id = route.params.id
  if (id) {
    try {
      const res = await axios.get(`${baseApi}/api/journals/${id}`)
      const data = res.data

      form.value = {
        title: data.title,
        content: data.content,
        location: data.location,
        mentions: JSON.parse(data.mentions || '[]'),
        images: JSON.parse(data.images || '[]'),
        // Add others if needed
      }
    } catch (err) {
      console.error('❌ Load journal failed:', err.response?.data || err.message)
      alert('❌ Failed to load journal data')
    }
  }
})

// async function fetchJournal(id) {
//   try {
//     const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/journals/${id}`)
//     const journal = res.data

//     title.value = journal.title
//     content.value = journal.content
//     location.value = journal.location
//     images.value = Array.isArray(journal.images) ? journal.images : JSON.parse(journal.images || '[]')
//     readTime.value = journal.read_time
//   } catch (err) {
//     console.error(err)
//     alert('❌ Failed to load journal data for editing')
//   }
// }

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

.location-block {
  margin-bottom: 1.5rem;
}

.location-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.location-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.location-input {
  padding: 10px;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
margin-bottom: 0.5rem;
}

.use-location-btn {
      margin-bottom: 0.5rem;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 6px;
  background: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background 0.3s;
}

.use-location-btn:hover {
  background: #e6e6e6;
}

.location-suggestions {
  background: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: calc(100% + 50px);
  left: 0;
  right: 0;
  z-index: 1000;
}

.suggestion-item {
  padding: 12px;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.suggestion-item:hover {
  background-color: #f9f9f9;
}

.suggestion-text-block {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.suggestion-title {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.suggestion-sub {
  font-size: 0.85rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-icon {
  font-size: 1.4rem;
  color: #444;
  flex-shrink: 0;
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
