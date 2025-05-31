<template>
  <div class="create-post-page">
    <div class="hero">
      <img src="../assets/Createpost.png" class="hero-bg" />
      <h1 class="hero-title">
        Share your Travel Experience in<br />form of a journal
      </h1>
    </div>

    <div class="form-wrapper">
      <div class="section-head">
        <h2>Top places with reviews</h2>
        <p>Travelers want to see more reviews of these places.</p>
      </div>

      <CreatePost />
    </div>
  </div>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue';

export default {
  components: {
    CreatePost
  }
};
</script>

<style scoped>
.create-post-page {
  width: 100%;
  overflow-x: hidden;
}
.hero {
  position: relative;
  height: 100%;
}
.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}
.form-wrapper {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
}
.section-head h2 {
  font-size: 2rem;
  color: #111;
  margin-bottom: 8px;
}
.section-head p {
  color: #666;
  margin-bottom: 32px;
}
</style>
