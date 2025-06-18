<template>
    <div>
    <!-- TOP COVER IMAGE -->
    <div class="cover-photo">
      <img src="/src/assets/cover.png" alt="Cover" />
    </div>

    <!-- PROFILE -->
    <div class="profile-banner">
    <div class="profile-pic-wrapper">
    <img :src="profileImage || defaultImage" alt="Profile" class="profile-pic" />
    <span class="edit-icon" @click="showImageOptions = true">✏️</span>

    <!-- Profile Image Options Modal -->
    <div class="profile-image-modal" v-if="showImageOptions">
      <div class="modal-option" @click="selectFromLibrary">📷 Choose from library</div>
      <div class="modal-option" @click="takePhoto">📸 Take photo</div>
      <div class="modal-option" @click="changeCoverPhoto">🖼️ Change cover picture</div>
      <div class="modal-option delete" @click="deleteProfileImage">🗑️ Delete</div>
      <div class="modal-option cancel" @click="showImageOptions = false">Cancel</div>
      <input ref="fileInput" type="file" accept="image/*" @change="handleImageUpload" hidden />
    </div>
  </div>
  <h2 class="profile-name">Nikah</h2>

   <!--  3 BUTTONS the top -->
    <div class="tab-buttons">
    <!-- Post -->
    <div class="tab-button" :class="{ active: currentTab === 'post' }" @click="currentTab = 'post'">
      Post
      <div class="underline" v-if="currentTab === 'post'"></div>
    </div>
    <div class="tab-divider"></div>
    <!-- Settings -->
    <div class="tab-button" :class="{ active: currentTab === 'settings' }" @click="currentTab = 'settings'">
      Settings
      <div class="underline" v-if="currentTab === 'settings'"></div>
    </div>
    <div class="tab-divider"></div>
    <!-- Logout -->
    <div class="tab-button" :class="{ active: currentTab === 'logout' }" @click="currentTab = 'logout'">
      Logout
      <div class="underline" v-if="currentTab === 'logout'"></div>
    </div>
  </div>

  <!-- setting detail -->
  <div v-if="currentTab === 'settings'" class="settings-card">
    <div class="setting-row" v-for="(field, index) in settings" :key="index">
      <div class="setting-info">
        <div class="field-label">{{ field.label }}</div>
        <div class="field-value-group">
          <div class="field-value">{{ field.value }}</div>

        <!-- Add extra button for Email only -->
        <button v-if="field.label === 'Email'" class="add-email-btn">⬤ Add another email</button>
      </div>
    </div>
    <div class="button-column">
      <button class="change-btn">✏️ Change</button>
    </div>
  </div>
</div>

  <div class="main-layout">
    <!-- LEFT COLUMN -->
    <div v-if="currentTab === 'post'" class="left-column">
      <h3 class="section-title">Intro</h3>
      <p class="bio-text">{{ bioText }}</p>
      <button class="gray-button" @click="openEditBioModal">Edit Bio</button>

      <!-- Edit Bio Modal -->
      <div v-if="showEditBioModal" class="modal-overlay">
        <div class="modal-content">
          <h3>Edit Bio</h3>
          <textarea v-model="newBioText" class="bio-textarea"></textarea>
          <div class="modal-actions">
            <button class="save-btn" @click="saveBio">Save</button>
            <button class="cancel-btn" @click="showEditBioModal = false">Cancel</button>
          </div>
        </div>
      </div>


      <ul class="info-list">
      <li><span>📍</span> {{ details.location }}</li>
      <li><span>✅</span> {{ details.instagram }}</li>
      <li><span>💬</span> {{ details.nickname }}</li>
    </ul>

    <button class="gray-button" @click="openEditDetailsModal">Edit Details</button>
    <!-- Edit Details Modal -->
    <div v-if="showEditDetailsModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Edit Your Details</h3>

        <label class="modal-label">📍 Location</label>
        <input v-model="newDetails.location" class="modal-input" placeholder="Enter your location" />

        <label class="modal-label">📸 Instagram</label>
        <input v-model="newDetails.instagram" class="modal-input" placeholder="@your_instagram" />

        <label class="modal-label">💬 Account Name</label>
        <input v-model="newDetails.name" class="modal-input" placeholder="Your name" />

        <div class="modal-actions">
          <button class="save-btn" @click="saveDetails">Save</button>
          <button class="cancel-btn" @click="showEditDetailsModal = false">Cancel</button>
        </div>
      </div>
    </div>


      <div class="featured">
      <div class="featured-images">
        <img v-for="(photo, index) in featuredPhotos" :key="index" :src="photo" alt="Featured" />
      </div>
      <button class="gray-button" @click="showEditFeaturedModal = true">Edit Featured</button>
    </div>
    <!-- Edit Featured Photos Modal -->
    <div v-if="showEditFeaturedModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Edit Featured Photos</h3>

        <!-- Current Images -->
        <div class="edit-featured-grid">
          <div v-for="(photo, index) in featuredPhotos" :key="index" class="featured-item">
            <img :src="photo" />
            <button class="remove-btn" @click="removeFeatured(index)">✖</button>
          </div>
        </div>

        <!-- Add Photo -->
        <input type="file" accept="image/*" @change="addFeaturedPhoto" class="upload-input" />

        <div class="modal-actions">
          <button class="save-btn" @click="showEditFeaturedModal = false">Done</button>
        </div>
      </div>
    </div>

      <!-- Photo Gallery Section -->
    <div class="photo-gallery">
      <div class="gallery-header">
        <h3>Photos</h3>
        <a href="#" class="see-all">See All Photos</a>
      </div>
      <div class="gallery-grid">
        <img v-for="(photo, index) in galleryPhotos" :key="index" :src="photo" class="gallery-img" />
      </div>
    </div>

    </div>

    <!-- RIGHT COLUMN -->
    <div v-if="currentTab === 'post'" class="right-column">
      <div class="post-header">
        <h3>Post</h3>
        <router-link to="/postCard" class="create-post-btn">➕ Create Post</router-link>
        <CreatePost v-if="showCreatePost" @close="showCreatePost = false" />
      </div>

      <div class="view-toggle">
        <div
          :class="['toggle-option', { active: viewMode === 'list' }]"
          @click="viewMode = 'list'"
        >
          <span class="icon">≡</span> List View
        </div>

        <div
          :class="['toggle-option', { active: viewMode === 'grid' }]"
          @click="viewMode = 'grid'"
        >
          <span class="icon">▦</span> Grid View
        </div>
      </div>


      <div :class="['post-container', viewMode]">
        <div v-for="(post, index) in posts" :key="index" class="post-card">
          <img :src="post.image" :alt="post.title" class="post-img" />
          <div class="post-content" v-if="viewMode === 'grid'">
            <h4 class="post-title">{{ post.title }}</h4>
            <div class="meta-grid">
              <span>{{ post.location }}</span>
              <span>{{ post.date }}</span>
            </div>
          </div>
          <div class="post-content" v-if="viewMode === 'list'">
            <h4 class="post-title">{{ post.title }}</h4>
            <div class="meta-list">
              <span>{{ post.location }}</span>
              <span>{{ post.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import PostCard from '@/views/PostCard.vue';

export default {
  name: 'ProfilePage',
    components: {
    PostCard,
    Footer,


  },
  data() {
    return {
      currentTab: 'post', // Default tab
      viewMode: 'grid',
      showCreatePost: false,
      profileImage: null,
      defaultImage: "/src/assets/pf.png",
      showImageOptions: false,
      showEditBioModal: false,
      newBioText: '',

      bioText: "I'm a vlogger in Cambodia. I love traveling :)",

      details: {
      location: 'From Phnom Penh',
      instagram: 'Nikah Official',
      nickname: 'Nikah'
      },
    showEditDetailsModal: false,
    newDetails: {
      location: '',
      instagram: '',
      nickname: ''
    },
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
      ],
      galleryPhotos: [
          '/src/assets/p6.png',
          '/src/assets/p7.png',
          '/src/assets/p8.png',
          '/src/assets/p9.png',
          '/src/assets/p10.png',
          '/src/assets/p11.png',
          '/src/assets/p12.png',
          '/src/assets/p6.png',
          '/src/assets/p7.png',
        ],
        featuredPhotos: [
          '/src/assets/p1.png',
          '/src/assets/p3.png',
          '/src/assets/p1.png',
          '/src/assets/p1.png',
        ],
        showEditFeaturedModal: false,


      settings: [
        { label: 'Name', value: 'Lyka' },
        { label: 'Email', value: 'lyka99@gmail.com' },
        { label: 'Password', value: '************' },
        { label: 'Phone number', value: '0987653562' },
        { label: 'Address', value: 'St 32, Beoung Kak2, khan tuol kork, Phnom Penh, Cambodia' },
        { label: 'Date of birth', value: '01-01-1998' },
      ]
    };
  },
  methods: {
      handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = URL.createObjectURL(file);
        this.showImageOptions = false;
      }
    },
    selectFromLibrary() {
      this.$refs.fileInput.click();
    },
    takePhoto() {
      alert("Camera access not implemented.");
      this.showImageOptions = false;
    },
    changeCoverPhoto() {
      alert("You selected change cover.");
      this.showImageOptions = false;
    },
    deleteProfileImage() {
      this.profileImage = null;
      this.showImageOptions = false;
    },
    openEditBioModal() {
      this.newBioText = this.bioText; // set existing bio
      this.showEditBioModal = true;
    },
    saveBio() {
      this.bioText = this.newBioText;
      this.showEditBioModal = false;
    },
    openEditDetailsModal() {
      this.newDetails = { ...this.details };
      this.showEditDetailsModal = true;
    },
    saveDetails() {
      this.details = { ...this.newDetails };
      this.showEditDetailsModal = false;
    },
    removeFeatured(index) {
      this.featuredPhotos.splice(index, 1);
    },
    addFeaturedPhoto(event) {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        this.featuredPhotos.push(imageUrl);
  }
}

  }
};
</script>

<style scoped>
/* cover */
.cover-photo img {
  width: 100%;
  max-width: 1400px;
  height: 500px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  padding: 0;
  border-radius:16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 32px;
  margin-top: 32px;
}
/* profile in center */
.profile-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -95px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.profile-pic-wrapper {
  position: relative;
  width: 130px;
  height: 130px;

}

.profile-pic {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
}

.edit-icon {
  position: absolute;
  bottom: 5px;
  right: 9px;
  background: #FF8888; /* matching pink */
  border-radius: 50%;
  width: 10px;
  padding: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.profile-name {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
}
.profile-buttons {
  margin-top: 12px;
  display: flex;
  gap: 16px;
}

.profile-btn {
  border: none;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #333;
}

.profile-btn:hover {
  background: #e0e0e0;
}
/* 3 buttons */
.tab-buttons {
  display: flex;
  justify-content: center;
  background: #fff;
  padding: 16px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 25px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  gap: 150px;
}

.tab-button {
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #111;
  cursor: pointer;
  padding: 4px 12px;
}

.tab-button.active {
  font-weight: 600;
  color: #0f2e1d;
}

.underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60%;
  height: 3px;
  background-color: #398C5E;
  border-radius: 2px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
}

.tab-divider {
  width: 1px;
  height: 20px;
  background: #e2e6ea;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.bio-textarea {
  width: 100%;
  height: 100px;
  padding: 12px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  resize: none;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 12px;
}

.save-btn, .cancel-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.save-btn {
  background-color: #398C5E;
  color: white;
}

.cancel-btn {
  background-color: #e0e0e0;
  color: #111;
}

/* right and left columns */
.main-layout {
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;
  box-sizing: border-box;
  height: 100vh; /* Fill the whole screen height */
  overflow: hidden;
}

/* LEFT COLUMN */
.left-column {
  flex: 1;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  min-width: 340px;
  max-width: 420px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
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

.featured-images {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.featured-images img {
  width: 90px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
}
/* Photo on left side */
.photo-gallery {
  margin-top: 20px;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.gallery-header h3 {
  font-size: 18px;
  font-weight: 600;
}

.see-all {
  font-size: 14px;
  color: #198754; /* Bootstrap green */
  text-decoration: none;
  font-weight: 500;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.gallery-img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
}

/* RIGHT COLUMN */
.right-column {
  flex: 2;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  height: 100%;
  overflow-y: auto;
}

/* Post Header & View Toggle */
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.create-post-btn {
  background-color: #e9ecef; /* light gray */
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #111;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
}

.view-toggle {
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
}
.toggle-option {
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  font-weight: 300;
  font-size: 16px;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  transition: color 0.3s ease;
}
.toggle-option.active {
  color: #398C5E;
  background-color: #f8fdfb;
}
.toggle-option.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 4px;
  background-color: #398C5E;
  border-radius: 4px;
}

/* GRID VIEW */
.post-container.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 20px 0;
}

.post-container.grid .post-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.post-container.grid .post-card:hover {
  transform: translateY(-4px);
}

.post-container.grid .post-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.post-container.grid .post-content {
  padding: 12px 16px;
  color: #111;
}

.post-container.grid .post-content h4 {
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
}
.post-container.grid .post-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
}
.meta-grid {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
}


/* LIST VIEW */
.post-container.list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
}

.post-container.list .post-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.post-container.list .post-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.post-container.list .post-content {
  justify-content: space-between;
  padding: 12px 20px;
  color: #ccc;
  font-size: 14px;
}

.post-container.list .post-content span {
  color: #111;
}
.post-container.list .post-content {
  padding: 16px 20px;
}
.post-container.list .post-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
}
.meta-list {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
}
/* setting */
.settings-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  width: 80%;
  max-width: 1000px;
  margin: 32px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}
.setting-info {
  flex: 1;

}

.field-label {
  font-size: 13px;
  color: #888;
  margin-bottom: 4px;
}

.field-value {
  font-size: 16px;
  font-weight: 600;
  color: #111;
}
.button-column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;               /* spacing between buttons */
  flex-wrap: wrap;         /* allow responsive wrapping */
  min-width: 240px;        /* wide enough to fit both buttons */
}
.field-value-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.change-btn {
  padding: 6px 12px;
  background: #fff;
  border: 1.5px solid #398C5E;
  color: #398C5E;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.change-btn:hover {
  background: #f1fdf7;
}

.add-email-btn {
  padding: 6px 12px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  color: #111;
  cursor: pointer;
  white-space: nowrap;
}
/* Edit Pf */
.profile-image-modal {
  position: absolute;
  top: 100%;
  right: -220px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  width: 200px;
  height: auto;
  z-index: 100;
}
/* input Edit */
.modal-option {
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #eee;
}

.modal-option:hover {
  background: #f8f9fa;
}

.modal-option.cancel {
  text-align: center;
  color: #fff;
  background: #398C5E;
  padding: 10px;
  border-radius: 0 0 14px 14px;

}
.modal-label {
  display: block;
  margin-top: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  text-align: left;
}

.modal-input {
  width: 100%;
  padding: 10px 12px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
}

.modal-input:focus {
  border-color: #398C5E;
  outline: none;
  box-shadow: 0 0 3px rgba(57, 140, 94, 0.4);
}

/* Edit Featured */
.edit-featured-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0;
  justify-content: center;
}

.featured-item {
  position: relative;
}

.featured-item img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}

.remove-btn {
  position: absolute;
  top: -6px;
  right: -6px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 14px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.upload-input {
  margin-top: 10px;
  font-size: 14px;
}
</style>
