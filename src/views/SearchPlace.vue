<template>
  <div class="search-page">
    <h2 class="page-title">Results for "{{ location }}"</h2>

    <div v-if="loading" class="status">Loading...</div>

    <div v-else-if="places.length > 0" class="results">
      <div v-for="place in places" :key="place.id" class="result-card">
        <h3>{{ place.name }}</h3>
        <p>{{ place.location }}</p>
        <p class="desc" v-if="place.description">{{ place.description }}</p>
      </div>
    </div>

    <div v-else class="status">
      <p>No matching places found for "{{ search }}".</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const location = ref(route.query.location || '')
const search = ref(route.query.search || '')

const places = ref([])
const loading = ref(true)

const fetchPlaces = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/places', {
      params: {
        location: location.value,
        search: search.value
      }
    })
    places.value = response.data
  } catch (error) {
    console.error('Error fetching places:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPlaces()
})
</script>

<style scoped>
.search-page {
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
}

.page-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.status {
  font-size: 1.1rem;
  color: #666;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.result-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  transition: 0.2s ease;
}

.result-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.result-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.result-card .desc {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #444;
}
</style>

