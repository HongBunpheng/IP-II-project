<template>
    <div class="budget-page">
        <!-- Hero Section -->
        <div class="hero">
            <img src="@/assets/picture/cover1.png" alt="Cover" class="cover-img" />
            <h1 class="hero-title">On Budget is not the problem anymore</h1>
        </div>

        <!-- Recommendation Section -->
        <section class="recommendation">
            <h2>Budget Recommendation</h2>
            <p>Select the most affordable places for fitting your budget</p>

            <!-- Tabs -->
            <div class="tabs">
                <div :class="['tab', currentTab === 'analyse' ? 'active' : '']" @click="currentTab = 'analyse'">Analyse
                </div>
                <div :class="['tab', currentTab === 'saved' ? 'active' : '']" @click="currentTab = 'saved'">Saved</div>
            </div>

            <!-- Form -->
            <div v-if="currentTab === 'analyse'" class="form-area">
                <div class="form-group">
                    <label>Select a province:</label>
                    <select v-model="province">
                        <option>Phnom Penh</option>
                        <option>Siem Reap</option>
                        <option>Kampot</option>
                        <option>Battambang</option>
                        <option>Preah Sihanouk</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Input Amount:</label>
                    <input type="number" v-model="budget" placeholder="Enter your budget" />
                    <button @click="handleGo">Go</button>
                </div>
            </div>

            <!-- Results -->
            <div v-if="currentTab === 'analyse'" class="result-section">
                <h3 class="result-title">Result</h3>

                <div v-if="filteredPlaces.length === 0" class="empty-state">
                    <img src="@/assets/picture/empty-box.png" />
                    <p>No hotels found for this budget and province.</p>
                </div>

                <HotelCard v-for="(hotel, index) in filteredPlaces" :key="hotel.id" :hotel="hotel" :index="index"
                    :isSaved="isSaved(hotel.id)" @saveToggle="toggleSave" />
            </div>

            <!-- Saved -->
            <div v-if="currentTab === 'saved'" class="saved-section">
                <h3 class="result-title">Saved Hotels</h3>
                <p v-if="savedHotels.length === 0" class="result-subtitle">No saved hotels yet.</p>

                <HotelCard v-for="(hotel, index) in savedHotels" :key="'saved-' + hotel.id" :hotel="hotel"
                    :index="index" :isSaved="true" @saveToggle="toggleSave" />
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import HotelCard from '@/components/HotelCard.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'BudgetPage',
    components: {
        HotelCard,
        Footer,
    },
    data() {
        return {
            currentTab: 'analyse',
            province: 'Phnom Penh',
            budget: '',
            filteredPlaces: [],
            savedPlaceIds: [],
            savedData: [],
            accountId: 1, // replace with actual auth user ID from localStorage if needed
        };
    },
    computed: {
        savedHotels() {
            return this.savedData.filter(item => item.saveable_type === 'App\\Models\\Hotel')
                .map(item => item.saveable);
        },
    },
    methods: {
        async handleGo() {
            if (!this.budget) return alert('Please enter a budget.');
            try {
                const res = await axios.get('http://localhost:8000/api/hotels', {
                    params: {
                        province: this.province,
                        budget: this.budget
                    }
                });
                this.filteredPlaces = res.data.map(hotel => ({
                    ...hotel,
                    details: hotel.description,
                    image: hotel.images
                }));
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        },

        async fetchSavedPlaces() {
            try {
                const res = await axios.get(`http://localhost:8000/api/saved-places/user/${this.accountId}`);
                this.savedData = res.data;
                this.savedPlaceIds = res.data
                    .filter(item => item.saveable_type === 'App\\Models\\Hotel')
                    .map(item => item.saveable_id);
            } catch (error) {
                console.error('Error fetching saved places:', error);
            }
        },

        isSaved(hotelId) {
            return this.savedPlaceIds.includes(hotelId);
        },

        async toggleSave(hotel) {
            const isAlreadySaved = this.isSaved(hotel.id);
            const payload = {
                account_id: this.accountId,
                saveable_id: hotel.id,
                saveable_type: 'App\\Models\\Hotel'
            };

            try {
                if (isAlreadySaved) {
                    const encodedType = encodeURIComponent('App\\Models\\Hotel');
                    await axios.delete(`http://localhost:8000/api/saved-places/${hotel.id}/${encodedType}`);
                    this.savedPlaceIds = this.savedPlaceIds.filter(id => id !== hotel.id);
                    this.savedData = this.savedData.filter(item => item.saveable_id !== hotel.id);
                } else {
                    const res = await axios.post('http://localhost:8000/api/saved-places', payload);
                    this.savedPlaceIds.push(hotel.id);
                    this.savedData.push(res.data);
                }
            } catch (error) {
                console.error('Error saving/unsaving:', error);
            }
        },
    },
    created() {
        this.fetchSavedPlaces();
    }
};
</script>

<style scoped>
/* Your styles remain unchanged from your previous version */
.budget-page {
    font-family: 'Poppins', sans-serif;
    color: #222;
}

.hero {
    position: relative;
    text-align: center;
}

.cover-img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.recommendation {
    text-align: center;
    padding: 2rem 1rem;
}

.tabs {
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid #00c4a7;
    margin: 4rem;
    margin-bottom: 1rem;
}

.tab {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    font-weight: 500;
}

.tab.active {
    color: white;
    background-color: #00c4a7;
    border-radius: 8px 8px 0 0;
}

.form-area {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.form-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

input,
select {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    min-width: 180px;
}

button {
    background-color: #00c4a7;
    border: none;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
}

.empty-state {
    margin-top: 2rem;
    height: 500px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.empty-state img {
    margin-top: 10rem;
    width: 120px;
    opacity: 0.6;
}

.empty-state p {
    margin-top: 0.5rem;
    color: #666;
    font-size: 1rem;
}

.result-section,
.saved-section {
    text-align: center;
    margin-top: 2rem;
}

.result-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.result-subtitle {
    color: #666;
    margin-bottom: 2rem;
}
</style>
