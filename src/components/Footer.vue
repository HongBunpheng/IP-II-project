<template>
    <footer>
        <div class="logo">
            <img src="@/assets/logo.png" alt="TripTrek Logo" />
            <img src="@/assets/picture/logo-white.png" alt="TripTrek Logo" />
        </div>
        <div class="footer-text">
            <p>© 2023 TripTrek. All rights reserved.</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style>
footer {
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #25d3b7;
}
.logo {
    width: 100px;
    height: 100px;
}
.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.footer-text {
    margin-left: 20px;
    color: #fff;
}
</style>
