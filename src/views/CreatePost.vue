<template>
    <div class="review-form">
        <h2>Top places with reviews</h2>
        <p>Travelers want to see more reviews of these places.</p>

        <form @submit.prevent="submitReview">
            <div class="form-rows">
                <div class="upload-container">
                    <label class="upload-label" for="file-upload">
                        <div class="upload-placeholder">
                            <span class="camera-icon">📷</span>
                        </div>
                    </label>
                    <input type="file" id="file-upload" @change="onFileChange" accept="image/*" />
                </div>

                <div class="form">
                    <div class="form-group">
                        <label for="review-title">Title of your review</label>
                        <input type="text" id="review-title" v-model="reviewTitle"
                            placeholder="Summarize your Travel Journey" required />
                    </div>

                    <div class="form-group full-width">
                        <label for="review-content">Your review</label>
                        <textarea id="review-content" v-model="reviewContent"
                            placeholder="A detailed review of your Travel Journey. Travelers will love to know your experience."
                            required></textarea>

                        <div class="form-roww">
                            <div class="form-group">
                                <label for="location">Location</label>
                                <input type="text" id="location" v-model="location" placeholder="Enter Travel Location"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="travel-date">When did you travel?</label>
                                <input type="date" id="travel-date" v-model="travelDate" required />
                            </div>
                        </div>
                    </div>

                    <div class="disclaimer">
                        <input type="checkbox" />
                        <p>
                            I certify that the information in this review is based solely on my own experiences
                            with the product or service in question. I also attest that I have no personal or
                            professional affiliation with the business in question and have not been given any
                            incentives or payment from the business to write this review. I am aware that fake
                            reviews are strictly prohibited on Tripadvisor.
                        </p>
                    </div>
                </div>
            </div>

            <button type="submit">Submit Review</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviewTitle: '',
            reviewContent: '',
            location: '',
            travelDate: '',
            imageFile: null,
        };
    },
    methods: {
        onFileChange(event) {
            this.imageFile = event.target.files[0];
        },
        submitReview() {
            console.log({
                reviewTitle: this.reviewTitle,
                reviewContent: this.reviewContent,
                location: this.location,
                travelDate: this.travelDate,
                imageFile: this.imageFile,
            });
            this.resetForm();
        },
        resetForm() {
            this.reviewTitle = '';
            this.reviewContent = '';
            this.location = '';
            this.travelDate = '';
            this.imageFile = null;
        },
    },
};
</script>

<style scoped>
.review-form {
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-rows {
    display: flex;
    gap: 20px;
    margin: 10px
}

.upload-container,
.form {
    width: 50%;
}

.upload-label {
    cursor: pointer;
}

.upload-placeholder {
    width: 100%;
    height: 330px;
    background-color: #e0e0e0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #555;
}

input[type='file'] {
    display: none;
}

.form-group {
    width: 100%;
    margin-bottom: 15px;
}

.form-roww {
    display: flex;
    gap: 15px;
}

.form-roww .form-group {
    flex: 1;
    margin: 10px;
    margin-top: 10px    ;
}

input[type='text'],
textarea,
input[type='date'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
}

textarea {
    height: 70px;
}

.full-width {
    width: 100%;
}

button {
    width: 110px;
    margin: 20px auto 0;
    display: block;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
}

.disclaimer {
    font-size: 12px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin: 10px;

}

/* Optional Responsive */
@media (max-width: 768px) {
    .form-rows {
        flex-direction: column;
    }

    .upload-container,
    .form {
        width: 100%;
    }
}

/* .review-form * {
    text-align: left !important;
} */
.review-form {
  padding: 40px 20px 20px; /* top padding increased from 20px to 40px */
}
.review-form h2,
.review-form p {
  margin-bottom: 16px; /* adds space below the headings */
  text-align: left;
}

</style>