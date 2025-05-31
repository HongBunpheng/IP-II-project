<template>
  <div class="read-post">
    <!-- Hero Image -->
    <img :src="getAssetUrl('i20.jpg')" alt="Kep Beach" class="hero-image" />

    <!-- Post Section -->
    <section class="post-content">
      <div class="author">
        <img :src="getAssetUrl('profile.png')" class="author-img" />
        <div>
          <div class="author-name">Mina</div>
          <div class="author-location">Kep, Cambodia</div>
        </div>
      </div>

      <h2 class="post-title">
        Kep Is Just One Of Countless Jaw-Dropping Areas of Natural Beauty in Cambodia
      </h2>
      <p class="post-body">
        I had always been interested in Kep, so I decided to take a year-long journey to Cambodia to
        explore various religious practices and traditions.
      </p>

      <!-- Image Grid -->
      <div class="image-grid">
        <img :src="getAssetUrl('i21.png')" class="grid-img large" />
        <img :src="getAssetUrl('i22.png')" class="grid-img small" />
        <img :src="getAssetUrl('i23.png')" class="grid-img small" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    getAssetUrl(fileName) {
      return new URL(`../assets/${fileName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
.read-post {
  background-color: #1c1c1c;
  color: white;
  font-family: 'Arial', sans-serif;
}

.hero-image {
  width: 100%;
  height: auto;
}

.post-content {
  background: white;
  color: black;
  padding: 2rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.author-img {
  border-radius: 50%;
  width: 60px;
}
.author-name {
  font-weight: bold;
}
.author-location {
  font-size: 0.9rem;
  color: gray;
}

.post-title {
  margin-top: 1rem;
  font-size: 1.5rem;
}
.post-body {
  margin-top: 0.5rem;
  line-height: 1.6;
}

.image-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.grid-img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.large {
  grid-row: span 2;
}
.footer {
  background-color: #0cb67d;
  text-align: center;
  color: white;
  padding: 2rem 0;
}
.footer-logo {
  height: 40px;
  margin-bottom: 0.5rem;
}
</style>
