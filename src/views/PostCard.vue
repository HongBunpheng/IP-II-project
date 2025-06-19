<template>
  <div class="create-post-wrapper">
    <div class="create-post-container">
      <h2>Create a New Post</h2>

      <!-- Image Upload -->
      <div class="image-upload">
        <label for="file-input">
          <div class="image-preview" v-if="imagePreview">
            <img :src="imagePreview" alt="Preview" />
          </div>
          <div class="image-placeholder" v-else>
            <span>📷 Click to upload image</span>
          </div>
        </label>
        <input id="file-input" type="file" @change="handleImageUpload" accept="image/*" hidden />
      </div>

      <!-- Input Fields -->
      <input v-model="form.title" type="text" placeholder="Enter post title..." />
      <input v-model="form.location" type="text" placeholder="Where did you go?" />
      <input v-model="form.date" type="date" />

      <!-- Buttons -->
      <div class="button-row">
        <button class="back-btn" @click="$router.go(-1)">⬅ Back</button>
        <button class="submit-btn" @click="submitPost">✅ Submit Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      form: {
        title: '',
        location: '',
        date: '',
        image: null
      },
      imagePreview: null
    };
  },
  methods: {
    async createPost() {
  const formData = new FormData();
  formData.append("title", this.title);
  formData.append("image", this.imageFile);
  formData.append("location", this.location);
  formData.append("date", this.date);
  formData.append("user_id", 1);

  try {
    await axios.post(`/posts`, formData);
    alert("Post created!");
    this.$emit("close"); // close modal
  } catch (err) {
    console.error("Create post failed", err);
  }
},

//     handleImageUpload(event) {
//       const file = event.target.files[0];
//       if (file) {
//         this.form.image = file;
//         this.imagePreview = URL.createObjectURL(file);
//       }
//     },
//     submitPost() {
//       if (!this.form.title || !this.form.location || !this.form.date || !this.form.image) {
//         alert("Please fill out all fields and upload an image.");
//         return;
//       }

//       console.log("Post created:", this.form);
//       alert("Post submitted successfully!");

//       this.form = {
//         title: '',
//         location: '',
//         date: '',
//         image: null
//       };
//       this.imagePreview = null;
//       this.$router.push('/profile');
//     }
 }
};
</script>

<style scoped>
/* Wrapper fills full screen */
.create-post-wrapper {
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
}

/* Inner container */
.create-post-container {
  width: 100%;
  max-width: 720px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* Image Upload */
.image-upload label {
  cursor: pointer;
  display: block;
}

.image-placeholder {
  height: 280px;
  background: #f1f3f5;
  border: 2px dashed #ccc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
  transition: border-color 0.2s;
}

.image-placeholder:hover {
  border-color: #3cb371;
}

.image-preview img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 400px;
}

/* Inputs */
input[type="text"],
input[type="date"] {
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  transition: border 0.2s;
}

input:focus {
  outline: none;
  border-color: #3cb371;
}

/* Button Row */
.button-row {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.back-btn,
.submit-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.back-btn {
  background: #e9ecef;
  color: #333;
}

.back-btn:hover {
  background: #dee2e6;
}

.submit-btn {
  background: #3cb371;
  color: white;
}

.submit-btn:hover {
  background: #34a865;
}
</style>
