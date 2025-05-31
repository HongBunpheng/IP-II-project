<template>
    <div class="hotel-card">
        <!-- LEFT: Info -->
        <div class="hotel-info">
            <h2 class="hotel-title">{{ hotel.name }}</h2>
            <p class="hotel-desc">{{ hotel.description }}</p>
            <div class="hotel-footer">
                <button class="details-btn">details</button>
                <div class="hotel-stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= hotel.rating }">★</span>
                </div>
            </div>
        </div>

        <!-- RIGHT: Overlapping Images -->
        <div class="hotel-images">
            <!-- back image -->
            <img :src="hotel.images[1]" alt="back" class="img back" />
            <!-- front image -->
            <img :src="hotel.images[0]" alt="front" class="img front" />
        </div>
    </div>
</template>

<script>
import img1 from '@/assets/picture/download.jpg'
import img2 from '@/assets/picture/Stupas.jpg'
export default {
    name: "HotelCard",
    props: {
        hotel: {
            type: Object,
            required: true,
            default: () => ({
                name: "Pou Restaurant & Bar",
                description:
                    "That is the most popular place we’re highly recommend to your for visit it, we’re welcome for your to impress and bring you to stay here",
                rating: 5,
                images: [
                    img1,
                    img2
                ]
            })
        }
    }
};
</script>

<style scoped>
.hotel-card {
    width: clamp(500px, 90vw, 800px);
    height: clamp(230px, 10vh, 700px);
    margin: 25px;
    display: flex;
    align-items: center;
    /* center the whole block vertically */
    background-color: #e3e3e3;
    border-radius: 10px;
    overflow: visible;
    /* allow images to spill out */
}

/* Left side */
.hotel-info {
    flex: 1;
    display: flex;
    padding: 26px;
    flex-direction: column;
}

.hotel-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #222;
}

.hotel-desc {
    margin: 16px 0;
    width: 80%;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
}

.hotel-footer {
    display: flex;
    align-items: center;
    gap: 20px;
}

.details-btn {
    background-color: #25d3b7;
    color: #222;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

.hotel-stars {
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

/* Right side: overlapping images */
.hotel-images {
    position: relative;
    width: 200px;
    height: 200px;
}

.hotel-images .img {
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* back image sits lower and behind */
.hotel-images .back {
    left: 80px;
    top: -35px;
    width: 90%;
    z-index: 1;
}

/* front image sits on top */
.hotel-images .front {
    top: -5px;
    left: 5px;
    width: 70%;
    z-index: 2;
}
</style>