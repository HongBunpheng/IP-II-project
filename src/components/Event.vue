<template>
    <div class="event-card">
        <div class="event-image">
            <img src="@/assets/picture/event-water.jpg" alt="Water Festival" />
        </div>
        <div class="event-info">
            <p class="location">📍 Phnom Penh, Cambodia</p>
            <h2 class="title">Water Festival</h2>
            <p class="date">4 Nov - 6 Nov</p>
            <p class="desc">
                The Water Festival 2025 in Cambodia, held from November 4 to 6, celebrates the Tonle Sap River's flow
                reversal. It features boat races, fireworks, and festive gatherings, bringing people together to enjoy
                the vibrant tradition.
            </p>
        </div>
    </div>
</template>

<script setup>
// No props yet; static content
</script>

<style scoped>
.event-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: linear-gradient(to right, #ffffff, #f2fefc);
    padding: 40px;
    border-radius: 20px;
    max-width: 1000px;
    margin: auto;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.event-image img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.event-info {
    max-width: 500px;
    margin-bottom: 8rem;
}

.location {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.date {
    font-size: 16px;
    font-weight: 600;
    margin: 8px 0;
    color: #333;
}

.desc {
    font-size: 14px;
    color: #444;
    line-height: 1.6;
}
</style>