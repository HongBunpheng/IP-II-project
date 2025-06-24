<template>
  <div class="review-wrapper">
    <div class="review-container">
      <!-- LEFT SIDE: Recent Feedbacks -->
      <div class="feedbacks">
        <h3>Recent Feedbacks</h3>
        <template v-if="feedbackList.length > 0">
          <div v-for="(feedback, index) in feedbackList" :key="index" class="feedback-card">
            <img :src="feedback.avatar" class="avatar" />
            <div class="feedback-text">
              <div class="feedback-header">
                <strong class="name">{{ feedback.name }}</strong>
                <div class="stars">
                  <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= feedback.rating }">★</span>
                </div>
              </div>
              <p class="comment">{{ feedback.comment }}</p>
            </div>
          </div>
        </template>
        <p v-else class="no-feedback">
          No feedback yet. Be the first to review!
        </p>
      </div>

      <!-- RIGHT SIDE: Add a Review -->
      <div class="review-form">
        <h3>Add a review</h3>

        <label>Add Your Rating</label>
        <div class="rating-stars">
          <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= (hoverRating || newRating) }"
            @mouseover="hoverRating = n" @mouseleave="hoverRating = 0" @click="newRating = n">★</span>
        </div>

        <label>Add Your Comment</label>
        <textarea v-model="newComment" class="comment-box" rows="4" placeholder="Write your thoughts..."></textarea>

        <button class="submit-button" @click="submitReview">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Review",
  props: {
    type: {
      type: String, // 'hotel' or 'restaurant'
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      feedbackList: [],
      newComment: "",
      newRating: 0,
      hoverRating: 0,
      baseURL: import.meta.env.VITE_API_BASE_URL,
    };
  },
  mounted() {
    this.loadReviews();
  },
  methods: {
    loadReviews() {
      if (!this.type || !this.id) {
        console.warn("Missing review type or ID", this.type, this.id);
        return;
      }

      axios
        .get(`${this.baseURL}/api/reviews`, {
          params: {
            type: this.type,
            id: this.id,
          },
        })
        .then((res) => {
          this.feedbackList = res.data.map((r) => ({
            name: r.account?.name || "Guest",
            avatar: r.account?.profile_picture
              ? `${this.baseURL}${r.account.profile_picture.startsWith('/') ? '' : '/'}${r.account.profile_picture}`
              : "https://i.pravatar.cc/60",
            rating: r.rating,
            comment: r.comment,
          }));
        })
        .catch((err) => {
          console.error("❌ Failed to load reviews:", err);
        });
    },
    submitReview() {
      if (!this.newComment.trim() || this.newRating === 0) return;

      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (!user || !token) {
        alert("You must be logged in to submit a review.");
        return;
      }

      axios
        .post(
          `${this.baseURL}/api/reviews`,
          {
            account_id: user.id,
            reviewable_type: this.type,
            reviewable_id: this.id,
            rating: this.newRating,
            comment: this.newComment.trim(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          this.newComment = "";
          this.newRating = 0;
          this.hoverRating = 0;
          this.loadReviews();
        })
        .catch((err) => {
          console.error("❌ Submit failed:", err);
        });
    },
  },
};
</script>

<style scoped>
.review-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 40px 20px;
}

.review-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 25px;
  margin: 20px;
  box-sizing: border-box;
}

.feedbacks,
.review-form {
  flex: 1 1 480px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
}

.feedbacks h3,
.review-form h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.feedback-card {
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  border: 2px solid #ccc;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}


.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  align-self: center;
}

.feedback-text {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* New header layout for name + stars */
.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.feedback-text .name {
  font-weight: 600;
  color: #333;
}

.comment {
  padding-left: 30px;
}

.stars {
  display: flex;
  gap: 5px;
}

.star {
  display: flex;
  align-self: flex-start;
  font-size: 26px;
  color: #ccc;
}

.star.filled {
  color: #f5b700;
}

.feedback-text p {
  font-size: 14px;
  color: #444;
  margin: 0;
}

.no-feedback {
  font-style: italic;
  color: #777;
  text-align: center;
  padding: 10px;
  margin: auto 0;
}

.review-form label {
  font-size: 14px;
  color: #333;
  margin-top: 15px;
}

.rating-stars {
  display: flex;

  gap: 5px;
}

.rating-stars .star {
  font-size: 30px;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
}

.rating-stars .star.filled {
  color: #ffc700;
}

.comment-box {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border-radius: 10px;
  border: 2px solid #ccc;
  font-size: 14px;
  resize: none;
}

.submit-button {
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px 25px;
  background: #25d3b7;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background: #1cbda5;
}

@media (max-width: 1000px) {

  .feedbacks,
  .review-form {
    flex: 1 1 100%;
  }
}
</style>
