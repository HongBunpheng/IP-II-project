<template>
    <div class="hotel-card" :class="{ reverse: index % 2 !== 0 }">
        <!-- Info Section -->
        <div class="hotel-info">
            <h2 class="hotel-title">{{ hotel.name }}</h2>
            <p class="hotel-description">{{ hotel.details }}</p>
            <div class="hotel-footer">
                <button class="details-btn" @click="goToDetail(hotel.id)">details</button>

                <button class="save-btn" :class="{ saved: isSaved }" @click="emitSave">
                    {{ isSaved ? 'Saved' : 'Save' }}
                </button>

                <div class="stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= hotel.rating }">★</span>
                </div>
            </div>
        </div>

        <!-- Overlapping Images -->
        <div class="hotel-images" v-if="hotel.image?.length >= 2">
            <img :src="imageUrl(hotel.image[1])" class="img back" />
            <img :src="imageUrl(hotel.image[0])" class="img front" />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// ✅ Destructure props
const { hotel, index, isSaved } = defineProps({
    hotel: Object,
    index: Number,
    isSaved: Boolean
})

const emit = defineEmits(['saveToggle'])

const router = useRouter()

const goToDetail = (id) => {
    router.push(`/hotel/${id}`)
}

const emitSave = () => {
    emit('saveToggle', hotel)
}

const imageUrl = (img) => {
    return img.startsWith('http') ? img : `http://localhost:8000${img}`
}
</script>

<style scoped>
.hotel-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #e3e3e3;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10rem;
    gap: 30px;
    max-width: 1000px;
    width: 90%;
    font-family: 'Arial', sans-serif;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    position: relative;
    overflow: visible;
    z-index: 0;
}

.hotel-card.reverse {
    flex-direction: row-reverse;
}

.hotel-info {
    flex: 1 1 300px;
    min-width: 0;
}

.hotel-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #111;
}

.hotel-description {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
    color: #333;
}

.hotel-footer {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.details-btn {
    background-color: #00c4b3;
    color: black;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-weight: bold;
    cursor: pointer;
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

.hotel-images {
    position: absolute;
    top: -40px;
    right: 30px;
    width: 180px;
    height: 330px;
    z-index: 2;
}

.hotel-card.reverse .hotel-images {
    left: 30px;
    right: auto;
}

.img {
    position: absolute;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
}

.back {
    width: 180px;
    height: 330px;
    top: 0;
    left: 0;
    z-index: 1;
}

.front {
    width: 140px;
    height: 260px;
    top: 40px;
    left: -40px;
    z-index: 2;
}

.save-btn {
    background-color: #f1f1f1;
    color: #333;
    border: 1px solid #ccc;
    padding: 0.4rem 1.2rem;
    border-radius: 24px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.save-btn:hover {
    background-color: #00c4a7;
    color: white;
}

.save-btn.saved {
    background-color: #00c4a7;
    color: white;
    border-color: #00c4a7;
}

@media (max-width: 768px) {

    .hotel-card,
    .hotel-card.reverse {
        flex-direction: column;
        text-align: center;
    }

    .hotel-images {
        position: static;
        width: 90%;
        height: 220px;
        margin: 1rem auto 0 auto;
    }

    .img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .hotel-footer {
        justify-content: center;
    }
}
</style>
