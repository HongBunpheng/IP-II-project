<template>
    <div class="transport-card">
        <!-- TOP ROW -->
        <div class="top">
            <div class="trip-info">
                <!-- Times -->
                <div class="times">
                    <div class="time">{{ departureTime }}</div>
                    <div class="time">{{ arrivalTime }}</div>
                </div>

                <!-- Vertical line + dot -->
                <div class="timeline">
                    <span class="line"></span>
                    <span class="dot"></span>
                </div>

                <!-- Cities -->
                <div class="cities">
                    <div class="city">{{ departureCity }}</div>
                    <div class="city">{{ arrivalCity }}</div>
                </div>
            </div>

            <!-- Book now + price -->
            <div class="action">
                <button class="book-btn">Book Now</button>
                <div class="price">
                    <span class="label">price:</span>
                    <span class="amount">${{ price }}</span>
                </div>
            </div>
        </div>

        <!-- BOTTOM ROW -->
        <div class="bottom">
            <div class="distance">
                <span class="icon">🌐Distance: </span>{{ distance }}
            </div>
            <div class="travel-time">
                <span class="icon">⏱️</span>Travel Time: {{ travelTime }}
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    departureTime: String,
    departureCity: String,
    arrivalTime: String,
    arrivalCity: String,
    price: [String, Number],
    distance: String,
    travelTime: String
});
</script>

<style scoped>
.transport-card {
    width: 100%;
    max-width: 700px;
    margin: 1rem auto;
    background: #fff;
    border: 1px solid #b2f0cf;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(59, 210, 150, 0.15);
    display: flex;
    flex-direction: column;
    font-family: 'Urbanist', sans-serif;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.trip-info {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.times {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 15px;
    font-weight: 500;
}

.time {
    font-size: 14px;
    color: #333;
}

.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 48px;
    justify-content: space-between;
}

.timeline .line {
    /* position: absolute; */
    width: 3px;
    height: 35px;
    background: #3bd296;
}

.timeline .dot {
    width: 8px;
    height: 8px;
    background: #3bd296;
    border-radius: 50%;
}

.cities {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: -3px;
    font-size: 15px;
    font-weight: 500;
}

.city {
    font-size: 18px;
    font-weight: 700;
    color: #000;
}

.action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.book-btn {
    background: #3bd296;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 6px 14px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 6px;
}

.price {
    font-size: 14px;
    display: flex;
    align-items: center;
}

.price .label {
    color: #000000;
    margin: auto;
    margin-right: 4px;
    font-size: 20px;
}

.price .amount {
    color: #000;
    font-weight: 700;
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    font-size: 13px;
    color: #666;
}

.bottom .distance,
.bottom .travel-time {
    /* display: flex; */
    align-items: center;
}

.icon {
    margin: auto;
    /* margin-right: 6px; */
    font-size: 16px;
}
</style>