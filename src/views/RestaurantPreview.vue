<template>
    <div class="preview-page" v-if="restaurant">
        <button class="back-button" @click="router.back()">←</button>

        <h1 class="restaurant-name">{{ restaurant.name }}</h1>
        <p class="comment">If you see my comment I really recommend you to try this restaurant it really good</p>

        <!-- IMAGE LAYOUT -->
        <div class="image-wrapper" v-if="restaurant.image.length > 0">
            <!-- Big Image -->
            <img :src="getImageUrl(restaurant.image[0])" class="big-image" alt="Main Image" />

            <div class="right-grid">
                <!-- Medium (2 images) -->
                <div class="top-row">
                    <img v-for="(img, i) in restaurant.image.slice(1, 3)" :key="'medium-' + i" :src="getImageUrl(img)"
                        class="medium-image" alt="Medium Image" />
                </div>

                <!-- Small (3 images) -->
                <div class="bottom-row">
                    <img v-for="(img, i) in restaurant.image.slice(3, 6)" :key="'small-' + i" :src="getImageUrl(img)"
                        class="small-image" alt="Small Image" />
                </div>
            </div>
        </div>

        <!-- Rating + Price -->
        <div class="rating-price">
            <div class="stars">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= restaurant.rating }">★</span>
            </div>
            <span class="price-tag">price {{ restaurant.price }}</span>
        </div>

        <!-- Description -->
        <p class="restaurant-description">{{ restaurant.details }}</p>

        <!-- Book Button Right -->
        <div class="book-button-wrapper">
            <button class="book-button" @click="showBooking = true">Book Now</button>
        </div>

        <!-- Booking Popup -->
        <BookingPopup v-if="showBooking" @close="showBooking = false" />
    </div>

    <div class="review">
        <Review :type="'restaurant'" :id="restaurant?.id" v-if="restaurant" />
        <Map />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Map from '@/components/Explorepage/Map.vue'
import Review from '@/components/Explorepage/Review.vue'
import BookingPopup from '@/components/Explorepage/Booking.vue'

const restaurant = ref(null)
const route = useRoute()
const router = useRouter()
const showBooking = ref(false)

// Use local fallback image instead of broken placeholder
const fallbackImage = new URL('@/assets/picture/default.jpg', import.meta.url).href

const getImageUrl = (imgPath) => {
    if (!imgPath) return fallbackImage
    const base = import.meta.env.VITE_API_BASE_URL.replace('/api', '')
    return imgPath.startsWith('http')
        ? imgPath
        : `${base}/storage/${imgPath}`
}

onMounted(async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/restaurants/${route.params.id}`)
        const images = typeof res.data.image === 'string'
            ? JSON.parse(res.data.image)
            : res.data.image || []

        restaurant.value = {
            ...res.data,
            image: Array.isArray(images) ? images : [],
            rating: Number(res.data.rating)
        }

        console.log('✅ Restaurant image list:', restaurant.value.image)
    } catch (err) {
        console.error('❌ Failed to load restaurant:', err)
    }
})
</script>

<style scoped>
.preview-page {
    max-width: 100%;
    margin: auto;
    padding: 2rem;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

.back-button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}

.restaurant-name {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.comment {
    font-size: 14px;
    color: #444;
    margin-bottom: 2rem;
}

.image-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.big-image {
    width: 350px;
    height: 330px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.right-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    max-width: 600px;
}

.top-row,
.bottom-row {
    display: flex;
    gap: 1rem;
}

.medium-image {
    flex: 1;
    height: 190px;
    width: 285px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.small-image {
    flex: 1;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.rating-price {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 970px;
    text-align: left;
}

.stars {
    display: flex;
    gap: 5px;
}

.star {
    font-size: 18px;
    color: #ccc;
}

.star.filled {
    color: #f5b700;
}

.price-tag {
    background-color: #00c4b3;
    color: black;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
}

.restaurant-description {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    max-width: 990px;
    margin: 0 auto 1rem auto;
    text-align: left;
}

.book-button-wrapper {
    text-align: right;
    max-width: 990px;
    margin: 1rem auto 0 auto;
}

.book-button {
    background-color: #00c4b3;
    color: black;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .image-wrapper {
        flex-direction: column;
        align-items: center;
    }

    .right-grid {
        width: 100%;
    }

    .top-row,
    .bottom-row {
        flex-direction: column;
    }

    .medium-image,
    .small-image,
    .big-image {
        width: 100%;
    }

    .rating-price {
        flex-direction: column;
        align-items: flex-start;
    }

    .book-button-wrapper {
        text-align: center;
    }

    .book-button {
        width: 100%;
    }
}
</style>