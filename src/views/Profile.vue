<template>
  <div class="cover-wrapper">
    <!-- Cover Image -->
    <img src="/src/assets/cover.png" class="cover-photo" />

    <!-- Profile Card (Avatar + Name) -->
    <div class="profile-card">
      <div class="avatar-wrapper">
        <img src="/src/assets/pf.png" class="avatar" />
        <button class="edit-icon">✎</button>
      </div>
      <h2 class="username">Lyka</h2>
    </div>

    <!-- Tabs (Separate Card) -->
    <div class="tabs-card">
      <div class="tabs">
        <button :class="{ active: tab === 'post' }" @click="tab = 'post'">Post</button>
        <button :class="{ active: tab === 'settings' }" @click="tab = 'settings'">Settings</button>
        <button :class="{ active: tab === 'logout' }" @click="tab = 'logout'">Logout</button>
      </div>
    </div>

    <!-- Main Layout: Two Columns -->
    <div class="main-layout">
      <!-- Left Side -->
      <div class="left-column">
        <h3 class="section-title">Intro</h3>
        <p class="bio-text">I'm a vlogger in Cambodia. I love traveling :)</p>
        <button class="gray-button">Edit Bio</button>

        <ul class="info-list">
          <li><span>📍</span> From Phnom Penh</li>
          <li><span>✅</span> Lyka Official</li>
          <li><span>💬</span> Lyka</li>
        </ul>
        <button class="gray-button">Edit Details</button>

        <div class="featured">
          <div class="featured-images">
            <img src="/src/assets/p1.png" alt="photo1" />
            <img src="/src/assets/p2.png" alt="photo2" />
            <img src="/src/assets/p3.png" alt="photo3" />
          </div>
          <button class="gray-button">Edit Featured</button>
        </div>

        <div class="photo-card">
          <div class="photo-header">
            <h3>Photos</h3>
            <a href="#" class="view-all">See All Photos</a>
          </div>
          <div class="photo-grid">
            <div class="photo-images">
              <img src="/src/assets/p4.png" alt="photo4" />
              <img src="/src/assets/p5.png" alt="photo5" />
              <img src="/src/assets/p6.png" alt="photo6" />
              <img src="/src/assets/p7.png" alt="photo7" />
              <img src="/src/assets/p8.png" alt="photo8" />
              <img src="/src/assets/p9.png" alt="photo9" />
              <img src="/src/assets/p10.png" alt="photo10" />
              <img src="/src/assets/p11.png" alt="photo11" />
              <img src="/src/assets/p12.png" alt="photo12" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="right-column">
        <div v-if="tab === 'post'" class="post-section">
          <div class="post-header">
            <h3>Post</h3>
            <button class="create-post">➕ Create Post</button>
          </div>
            <div class="view-toggle">
              <button :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">📃 List View</button>
              <button :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">🔲 Grid View</button>
            </div>
      

          <div :class="['post-container', viewMode]">
            <div v-for="(post, index) in posts" :key="index" class="post-card">
              <img :src="post.image" class="post-img" />
              <div class="post-content">
                <h4>{{ post.title }}</h4>
                <div class="meta">
                  <span>{{ post.location }}</span>
                  <span>{{ post.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Settings Info -->
        <div v-if="tab === 'settings'" class="info-box">
          <div class="info-row" v-for="(item, index) in settings" :key="index">
            <div>
              <strong>{{ item.label }}</strong>
              <p>{{ item.value }}</p>
            </div>
            <button class="change-btn">🔄 Change</button>
          </div>

          <!-- Email with Add Option -->
          <div class="info-row">
            <div>
              <strong>Email</strong>
              <p>lyka99@gmail.com</p>
              <button class="add-email">➕ Add another email</button>
            </div>
            <button class="change-btn">🔄 Change</button>
          </div>
        </div>
      </div>
    </div>

    <JournalBox />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      tab: 'post',
      viewMode: 'grid',
      settings: [
        { label: 'Name', value: 'Lyka' },
        { label: 'Password', value: '************' },
        { label: 'Phone number', value: '0987653562' },
        { label: 'Address', value: 'St 32, Beoung Kak2, khan tuol kork, Phnom Penh, Cambodia' },
        { label: 'Date of birth', value: '01-01-1998' },
      ],
      posts: [
        {
          title: "Traditional Cambodian Food",
          image: "/src/assets/v1.png",
          location: "Siem Reap",
          date: "September 19, 2022"
        },
        {
          title: "The Angkor Remembrance Festival",
          image: "/src/assets/v2.png",
          location: "Siem Reap",
          date: "December 16, 2022"
        },
        {
          title: "Khmer New Year Celebration",
          image: "/src/assets/v3.png",
          location: "Phnom Penh",
          date: "April 16, 2024"
        },
        {
          title: "Cambodia’s 71 Years of Independence",
          image: "/src/assets/v4.png",
          location: "Phnom Penh",
          date: "November 9, 2024"
        }
      ]
    };
  },
};
</script>
<style scoped>


.cover-wrapper {
  position: relative;
  overflow: visible;
  padding-bottom: 140px;
  margin-bottom: 50px;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}

/* ---------- COVER IMAGE & PROFILE ---------- */
.cover-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.profile-card {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 40px;
}

.avatar-wrapper img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

}

.edit-icon {
  position: absolute;
  bottom: 10px;
  right: 0;
  background: salmon;
  margin-right: 7px;
  color: white;
  border: 1px solid;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 14px;
  cursor: pointer;
}

.username {
  margin-top: 10px;
  font-size: 22px;
  font-weight: 600;
}

/* ---------- TABS ---------- */
.tabs-card {
  display: flex;
  justify-content: center;
  margin-top: 160px;
}

.tabs {
  display: flex;
  width: 80%;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.tabs button {
  flex: 1;
  padding: 14px 16px;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  color: #444;
  transition: 0.3s ease;

  
}

.tabs button:hover,
.tabs button.active {
  color: #398C5E;
  font-weight: 600;
  border-bottom: 2px solid #398C5E;

}

.tabs button:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  height: 50%;
  width: 1px;
  background-color: #e0e0e0;
}

/* ---------- MAIN LAYOUT ---------- */
.main-layout {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 40px;
  margin-top: 20px;
  padding: 0;
}

/* ---------- LEFT COLUMN ---------- */
.left-column {
  flex: 1;
  background: #ffffff;
  padding: 20px;
  margin-left: 20px;
  border-radius: 12px;
  max-width: 420px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.bio-text {
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 12px;
}

.gray-button {
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: background 0.2s ease;
}

.gray-button:hover {
  background: #e0e0e0;
}

.info-list {
  list-style: none;
  padding: 0;
  font-size: 15px;
  margin-top: 16px;
}

.info-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Featured Images */
.featured-images {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.featured-images img {
  width: 100px;
  height: 130px;
  object-fit: cover;
  border-radius: 6px;
}

/* Photo Card */
.photo-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-top: 30px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.photo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.photo-card h3 {
  font-size: 18px;
  font-weight: 700;
}

.view-all {
  font-size: 14px;
  color: #1976d2;
  text-decoration: none;
}

.view-all:hover {
  text-decoration: underline;
}

.photo-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 10px;
}

.photo-images img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

/* ---------- RIGHT COLUMN ---------- */
.right-column {
  flex: 2;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* ---------- POSTS ---------- */
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;   
  margin-right: 10px;
  border: 1px solid #e0e0e0;
  border-bottom: none;
  padding: 5px;  
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
}

.view-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;   
  margin-right: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 10px;
}

.view-toggle button {
  background: none;
  border: none;
  padding: 6px 10px;
  padding-left: 60px;
  padding-right: 60px;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  color: black;
}

.view-toggle .active {
  color: black;
  border-bottom: 2px solid #398C5E;
}

.create-post {
  background: #f1f1f2;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.create-post.button
/* Grid View */
.post-container.grid {
  display: grid;
  justify-content: space-between;
  align-items: center;   
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  padding: 10px;
}

/* List View */
.post-container.list {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.post-card {
  display: block;
  /* background: #fff; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease-in-out;
}

.post-card:hover {
  transform: translateY(-4px);
}

.post-img {
  width: 100%;
  height: 580px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.post-container.list .post-card {
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow: hidden;
  height: 200px;
}
.post-container.list .post-content {
  padding: 16px;
  flex: 1;
}
.post-container.list .post-img {
  width: 450px;
  height: 350px;
}

.post-content {
  padding: 16px;
}

.post-content h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #777;
}

/* ---------- SETTINGS ---------- */
.info-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 12px 16px;
}

.change-btn {
  color: black;
  border: 1px solid #398C5E;
  background-color: white;
  border-radius: 6px;
  padding: 9px 10px;
  font-size: 12px;
  cursor: pointer;
}

.add-email {
  background: white;
  border: 1px solid #398C5E;
  color: black;
  cursor: pointer;
  padding: 9px 10px;
  font-size: 12px;
  border-radius: 6px;
  margin-top: 6px;
}
</style>
