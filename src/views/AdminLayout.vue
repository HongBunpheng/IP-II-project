<template>
    <div class="wrap">
        <div class="container">
            <!-- Sidebar -->
            <div class="side">
                <div class="logo-box">
                    <img src="@/assets/picture/logo.png" alt="Logo" class="logo" />
                </div>

                <!-- New -->
                <div class="nav-item" @click="toggleCreateSection">
                    <i class="bi bi-plus-circle"></i>
                    <span>New</span>
                </div>

                <!-- My Place -->
                <div class="nav-item" @click="toggleDropdown">
                    <i class="bi bi-person-circle"></i>
                    <span>My Place</span>
                </div>

                <div v-if="showDropdown" class="dropdown">
                    <div class="dropdown-item" :class="{ active: myPlaceType === 'hotel' }" @click="loadData('hotel')">
                        <i class="bi bi-building"></i> Hotel
                    </div>

                    <div class="dropdown-item" :class="{ active: myPlaceType === 'restaurant' }"
                        @click="loadData('restaurant')">
                        <i class="bi bi-scissors"></i> Restaurant
                    </div>

                    <div class="dropdown-item"><i class="bi bi-truck"></i> Transportation</div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="main">
                <h1>Dashboard</h1>

                <!-- Create one -->
                <div v-if="!showCreateSection && !myPlaceType" class="create-one" @click="toggleCreateSection">
                    <i class="bi bi-plus-circle-fill"></i>
                    <span>Create one</span>
                </div>


                <!-- Select one form -->
                <div v-if="showCreateSection" class="selection-panel">
                    <h3>Select one</h3>
                    <div class="selection-buttons">
                        <button @click="selectType('Hotel')">Hotel</button>
                        <button @click="selectType('Restaurant')">Restaurant</button>
                        <button @click="selectType('Transportation')">Transportation</button>
                    </div>

                    <!-- Hotel Form -->
                    <div v-if="selectedType === 'Hotel'" class="form-container">
                        <h3>Form's Hotel Filling</h3>
                        <form class="hotel-form" @submit.prevent="submitHotelForm">
                            <div class="form-row">
                                <label>Hotel's Name</label>
                                <input type="text" v-model="hotel.name" />
                                <label>Promotion</label>
                                <select v-model="hotel.promotion">
                                    <option value="">-- Select --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div class="form-row">
                                <label>Location</label>
                                <select v-model="hotel.location">
                                    <option value="">-- Select --</option>
                                    <option>Phnom Penh</option>
                                    <option>Siem Reap</option>
                                    <option>Kampot</option>
                                </select>
                                <label>Address</label>
                                <input type="text" v-model="hotel.address" />
                            </div>

                            <div class="form-row">
                                <label>Contact</label>
                                <input type="text" v-model="hotel.contact" />
                                <label>Rating</label>
                                <input type="number" v-model="hotel.rating" step="0.1" min="0" max="5" />
                            </div>

                            <div class="form-row">
                                <label>Price</label>
                                <input type="number" v-model="hotel.price" step="0.01" />
                                <label>Image</label>
                                <input type="file" multiple @change="e => handleFileChange(e, 'image', 'hotel')" />
                            </div>

                            <div class="form-row">
                                <label>Details</label>
                                <textarea v-model="hotel.details" rows="3"></textarea>
                                <label>Detail Images</label>
                                <input type="file" multiple
                                    @change="e => handleFileChange(e, 'detail_image', 'hotel')" />
                            </div>

                            <div class="submit-row">
                                <button type="submit">Done</button>
                            </div>
                        </form>
                    </div>

                    <!-- Restaurant Form -->
                    <div v-if="selectedType === 'Restaurant'" class="form-container">
                        <h3>Form's Restaurant Filling</h3>
                        <form class="hotel-form" @submit.prevent="submitRestaurantForm">
                            <div class="form-row">
                                <label>Restaurant Name</label>
                                <input type="text" v-model="restaurant.name" />
                                <label>Promotion</label>
                                <select v-model="restaurant.promotion">
                                    <option value="">-- Select --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div class="form-row">
                                <label>Location</label>
                                <select v-model="restaurant.location">
                                    <option value="">-- Select --</option>
                                    <option>Phnom Penh</option>
                                    <option>Siem Reap</option>
                                    <option>Kampot</option>
                                </select>
                                <label>Address</label>
                                <input type="text" v-model="restaurant.address" />
                            </div>

                            <div class="form-row">
                                <label>Contact</label>
                                <input type="text" v-model="restaurant.contact" />
                                <label>Rating</label>
                                <input type="number" v-model="restaurant.rating" step="0.1" min="0" max="5" />
                            </div>

                            <div class="form-row">
                                <label>Price Range</label>
                                <input type="text" v-model="restaurant.price" />
                                <label>Image</label>
                                <input type="file" multiple @change="e => handleFileChange(e, 'image', 'restaurant')" />
                            </div>

                            <div class="form-row">
                                <label>Description</label>
                                <textarea v-model="restaurant.details" rows="3"></textarea>
                                <label>Detail Images</label>
                                <input type="file" multiple
                                    @change="e => handleFileChange(e, 'detail_image', 'restaurant')" />
                            </div>

                            <div class="submit-row">
                                <button type="submit">Done</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Hotel List -->
                <div v-if="myPlaceType === 'hotel'" class="data-list">
                    <h3>Hotel List</h3>
                    <div v-for="(item, index) in myPlaceData" :key="index" class="data-card">
                        <p><strong>Name:</strong> {{ item.name }}</p>
                        <p><strong>Location:</strong> {{ item.location }}</p>
                        <p><strong>Rating:</strong> {{ item.rating }}</p>
                        <p><strong>Price:</strong> {{ item.price }}</p>
                        <p><strong>Details:</strong> {{ item.details }}</p>
                        <p><strong>Contact:</strong> {{ item.contact }}</p>
                        <p><strong>Promotion:</strong> {{ item.promotion }}</p>
                        <p><strong>Address:</strong> {{ item.address }}</p>
                        <p><strong>Images:</strong></p>
                        <img v-for="(img, i) in item.image" :key="i" :src="`${baseURL}/storage/${img}`"
                            class="data-image" />
                        <img v-for="(img, i) in item.detail_image" :key="i" :src="`${baseURL}/storage/${img}`"
                            class="data-image" />
                    </div>
                </div>

                <!-- Restaurant List -->
                <div v-if="myPlaceType === 'restaurant'" class="data-list">
                    <h3>Restaurant List</h3>
                    <div v-for="(item, index) in myPlaceData" :key="index" class="data-card">
                        <p><strong>Name:</strong> {{ item.name }}</p>
                        <p><strong>Location:</strong> {{ item.location }}</p>
                        <p><strong>Rating:</strong> {{ item.rating }}</p>
                        <p><strong>Price:</strong> {{ item.price }}</p>
                        <p><strong>Details:</strong> {{ item.details }}</p>
                        <p><strong>Contact:</strong> {{ item.contact }}</p>
                        <p><strong>Promotion:</strong> {{ item.promotion }}</p>
                        <p><strong>Address:</strong> {{ item.address }}</p>
                        <p><strong>Images:</strong></p>
                        <img v-for="(img, i) in item.image" :key="i" :src="`${baseURL}/storage/${img}`"
                            class="data-image" />
                        <img v-for="(img, i) in item.detail_image" :key="i" :src="`${baseURL}/storage/${img}`"
                            class="data-image" />
                    </div>
                </div>
                <!-- Transportation Form -->
                <div v-if="selectedType === 'Transportation'" class="form-container">
                <h3>Form's Transportation Filling</h3>
                <form class="hotel-form" @submit.prevent="submitTransportForm">
                    <div class="form-row">
                    <label>Time From</label>
                    <input type="time" v-model="transport.departureTime" />

                    <label>Time To</label>
                    <input type="time" v-model="transport.arrivalTime" />
                    </div>

                    <div class="form-row">
                    <label>Location From</label>
                    <input type="text" v-model="transport.departureCity" />

                    <label>Location To</label>
                    <input type="text" v-model="transport.arrivalCity" />
                    </div>

                    <div class="form-row">
                    <label>Distance</label>
                    <input type="text" v-model="transport.distance" />

                    <label>Travel Duration</label>
                    <input type="text" v-model="transport.travelTime" />
                    </div>

                    <div class="form-row price-row">
                        <div class="price-wrap">
                            <label>Price</label>
                            <input type="number" v-model="transport.price" class="short-input" />
                        </div>
                        </div>


                    <div class="submit-row">
                    <button type="submit">Done</button>
                    </div>
                </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const showDropdown = ref(false)
const showCreateSection = ref(false)
const selectedType = ref(null)
const myPlaceData = ref([])
const myPlaceType = ref('')

// Hotel state
const hotel = ref({
  name: '', promotion: '', location: '', address: '',
  contact: '', rating: '', price: '', details: '',
  image: [], detail_image: []
})

// Restaurant state
const restaurant = ref({
  name: '', promotion: '', location: '', address: '',
  contact: '', rating: '', price: '', details: '',
  image: [], detail_image: []
})

// Transportation state
const transport = ref({
  departureTime: '',
  arrivalTime: '',
  departureCity: '',
  arrivalCity: '',
  distance: '',
  travelTime: '',
  price: ''
})

// Toggle and selection
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const toggleCreateSection = () => {
  showCreateSection.value = !showCreateSection.value
  selectedType.value = null
  showDropdown.value = false
  myPlaceType.value = ''
  myPlaceData.value = []
}

const selectType = (type) => {
  selectedType.value = type
}

// Fetch data
const loadData = async (type) => {
  myPlaceType.value = type
  showCreateSection.value = false
  selectedType.value = null
  showDropdown.value = false

  try {
    const res = await axios.get(`${baseURL}/api/${type}s`)
    myPlaceData.value = res.data
  } catch (err) {
    console.error(err)
    alert(`❌ Failed to load ${type}s`)
  }
}

// File handling
const handleFileChange = (e, field, type) => {
  if (type === 'hotel') {
    hotel.value[field] = Array.from(e.target.files)
  } else if (type === 'restaurant') {
    restaurant.value[field] = Array.from(e.target.files)
  }
}

// Submit hotel
const submitHotelForm = async () => {
  const formData = new FormData()
  for (const key in hotel.value) {
    if (key === 'image' || key === 'detail_image') {
      hotel.value[key].forEach(file => formData.append(`${key}[]`, file))
    } else {
      formData.append(key, hotel.value[key])
    }
  }

  try {
    await axios.post(`${baseURL}/api/hotels`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    alert('✅ Hotel submitted successfully!')
  } catch (err) {
    console.error(err)
    alert('❌ Failed to submit hotel')
  }
}

// Submit restaurant
const submitRestaurantForm = async () => {
  const formData = new FormData()
  for (const key in restaurant.value) {
    if (key === 'image' || key === 'detail_image') {
      restaurant.value[key].forEach(file => formData.append(`${key}[]`, file))
    } else {
      formData.append(key, restaurant.value[key])
    }
  }

  try {
    await axios.post(`${baseURL}/api/restaurants`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    alert('✅ Restaurant submitted successfully!')
  } catch (err) {
    console.error(err)
    alert('❌ Failed to submit restaurant')
  }
}

// Submit transportation
const submitTransportForm = async () => {
  const formData = new FormData()
  for (const key in transport.value) {
    formData.append(key, transport.value[key])
  }

  try {
    await axios.post(`${baseURL}/api/transportations`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    alert('✅ Transportation added!')
    await loadData('transportation')
  } catch (err) {
    console.error(err)
    alert('❌ Failed to add transportation')
  }
}

</script>


<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

.wrap {
    width: 100vw;
    background: linear-gradient(to bottom, #fcfcfc, #ffffff, #b6e4b6);
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100vh;
}

.side {
    width: 215px;
    background: white;
    border-left: rgba(150, 221, 153, 0.5) 8px solid;
    border-right: rgba(162, 163, 162, 0.1) 1px solid;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    position: relative;
}

.logo-box {
    background: #96dd9a77;
    height: 75px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    height: 60px;
    width: 60px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    font-size: 18px;
    color: #333;
    cursor: pointer;
}

.nav-item:hover {
    background: #96dd9aa5;
    color: #444;
}

.dropdown {
    padding-left: 40px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.dropdown-item {
    font-size: 16px;
    color: #444;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 15px 13px 10px;
    transition: 0.2s;
}

.dropdown-item.active {
    background: #b6e4b6aa;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
}


.dropdown-item:hover {
    background: #96dd9aa5;
    padding: 10px;
    border-radius: 5px;
    color: #444;
}

.main {
    flex: 1;
    background: #fff;
    padding: 10px;
    margin-left: 30px;
    box-shadow: 0 0 25px rgba(178, 177, 177, 0.25);
}

.dashboard {
    margin: 20px;
}

h1 {
    margin: 15px 0 0 25px;
    font-size: 38px;
}

.create-one {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    font-weight: 500;
    font-size: 18px;
    gap: 10px;
    cursor: pointer;
    margin-top: 100px;
}

.create-one i {
    color: #28a745;
    font-size: 20px;
}

.selection-panel {
    margin-top: 15px;
    padding: 30px;
    border-radius: 8px;

}

h3 {
    font-size: 25px;
    color: #333;
    margin-bottom: 20px;
}

.selection-buttons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
}

.selection-buttons button {
    padding: 20px;
    flex: 1;
    font-size: 20px;
    border: none;
    background: #ddd;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s;
}

.selection-buttons button:hover {
    background: #96dd99;
}

.form-container {
    margin-top: 25px;
}

.hotel-form {
    background: #eee;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: flex;
    gap: 15px;
    /* display: flex; */
    flex-direction: start;
}
.price-row {
  justify-content: flex-start;
  display: flex;
}


.price-wrap {
  flex-direction: column;
  align-items: flex-start;
}

.short-input {
  margin-left: 6.5rem;
  width: 130px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.form-row label {
    flex: 1;
    padding: 10px;
    font-weight: 500;
}

.form-row input,
.form-row select,
.form-row textarea {
    flex: 4;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;

    border-radius: 6px;
    background: #fff;
}

.form-row input[type="text"]:focus {
    border: none;
}

.submit-row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.submit-row button {
    padding: 10px 30px;
    border: 1px solid #4CAF50;
    background: white;
    color: #4CAF50;
    border-radius: 20px;
    cursor: pointer;
}

.submit-row button:hover {
    background: #4CAF50;
    color: white;
}


</style>
