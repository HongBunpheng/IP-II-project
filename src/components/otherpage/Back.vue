<template>
    <button class="back-button" @click="goBack">
        ← Back
    </button>
</template>

<script>
export default {
    name: "BackButton",
    methods: {
        goBack() {
            this.$router.back(); // automatically goes back one step
        },
    },
};
</script>

<style scoped>
.back-button {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: #333;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease;
}

.back-button:hover {
    background-color: #ddd;
}
</style>