<template>
    <div class="province-card">
        <div class="image-container">

            <img :src="imageSrc" :alt="name" />
        </div>
        <div class="details">
            <p class="location">{{ location }}</p>
            <h2 class="province-name">{{ name }}</h2>
        </div>
        <div class="indicator"></div>
    </div>
</template>

<script setup>
defineProps({
    imageSrc: { type: String, required: true },
    location: { type: String, default: '' },
    name: { type: String, required: true }
    
})
</script>
<style scoped>
.province-card {
    width: 80%;
    max-width: 230px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    /* white card now */
    display: flex;
    flex-direction: column;
}

/* only this area gets the red */
.image-container {
    position: relative;
    width: 70%;
    overflow: hidden;
    padding-top: 66.66%;
    /* 3:2 ratio */
    /* background: #b82c2c;       red behind image */
    overflow: hidden;
}

/* fill that red box exactly */
.image-container img {
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* your details stay the same */
.details {
    padding: 12px 16px;
    text-align: center;
}

.location {
    position: absolute;
    margin: 0;
    font-size: 0.75rem;
    color: #666;
    left: 30px;
}

.province-name {
    margin: 17px 75px 0px 0px;
    font-size: 1.125rem;
    font-weight: 700;
    color: #222;
}

/* and your blue stripe */
.indicator {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* width: 4px; */
    background-color: #409eff;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}
</style>