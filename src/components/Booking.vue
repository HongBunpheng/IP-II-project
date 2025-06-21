<template>
    <div class="overlay">
        <div class="popup">
            <button class="close-btn" @click="$emit('close')">×</button>
            <h2 class="text">Your Booking</h2>
            <p class="subtitle">
                If you see my comment I really recommend you to try this hotel, it really good.
            </p>

            <form @submit.prevent="submitBooking">
                <!-- Name & Email -->
                <div class="row row-name-email">
                    <div id="coll-25" class="col-50">
                        <label for="firstName">Name</label>
                        <input id="firstName" v-model="firstName" placeholder="FirstName" required />
                        <input id="lastName" v-model="lastName" placeholder="lastName" required />

                    </div>

                    <div class="col-50">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" v-model="email" placeholder="e.g: chivkado20gmail.com"
                            required />
                    </div>
                </div>

                <!-- Type Room & Arrival -->
                <div class="row">
                    <div class="col-50">
                        <label for="roomType">Type Room</label>
                        <select id="roomType" v-model="roomType" required>
                            <option disabled value="">Select room type</option>
                            <option>Single</option>
                            <option>Double</option>
                            <option>Suite</option>
                        </select>
                    </div>
                    <div class="col-50">
                        <label for="arrivalDate">Arrive Date</label>
                        <input id="arrivalDate" type="date" v-model="arrivalDate" required />
                    </div>
                </div>

                <!-- Month, Day, Year -->
                <div class="row">
                    <div class="col-25">
                        <label for="month">Month</label>
                        <select id="month" v-model="month" required>
                            <option disabled value="">Select month</option>
                            <option v-for="m in months" :key="m">{{ m }}</option>
                        </select>
                    </div>
                    <div class="col-25">
                        <label for="day">Day</label>
                        <select id="day" v-model="day" required>
                            <option disabled value="">Select day</option>
                            <option v-for="d in 31" :key="d">{{ d }}</option>
                        </select>
                    </div>
                    <div class="col-50">
                        <label for="year">Year</label>
                        <select id="year" v-model="year" required>
                            <option disabled value="">Select year</option>
                            <option v-for="y in years" :key="y">{{ y }}</option>
                        </select>
                    </div>
                </div>

                <!-- Special Requests -->
                <div class="row">
                    <div class="col-100">
                        <label for="specialRequests">Special Requests</label>
                        <textarea id="specialRequests" v-model="specialRequests" placeholder="Special Requests"
                            rows="4"></textarea>
                    </div>
                </div>

                <!-- Submit -->
                <div class="footer">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const currentYear = new Date().getFullYear();
        return {
            firstName: '',
            lastName: '',
            email: '',
            roomType: '',
            arrivalDate: '',
            month: '',
            day: '',
            year: '',
            specialRequests: '',
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            years: Array.from({ length: 10 }, (_, i) => currentYear + i)
        };
    },
    methods: {
        submitBooking() {
            console.log({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                roomType: this.roomType,
                arrivalDate: this.arrivalDate,
                month: this.month,
                day: this.day,
                year: this.year,
                specialRequests: this.specialRequests
            });
            alert("Booking submitted!");
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup {
    background: #e4e4e4;
    padding: 30px;
    border-radius: 12px;
    width: 95%;
    max-width: 720px;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 26px;
    background: white;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
}

.text {
    font-weight: bold;
}

h2 {
    text-align: center;
    font-size: 24px;
    margin: 0 0 8px;
}

.subtitle {
    text-align: center;
    font-size: 14px;
    margin-bottom: 24px;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.row>* {
    flex: 1;
    min-width: 120px;
}

input,
select,
textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
    background: white;
}

textarea {
    resize: vertical;
    min-height: 80px;
}

label {
    font-weight: bold;

    margin-bottom: 6px;
    display: block;
    text-align: left;
}

.footer {
    display: flex;
    justify-content: flex-end;
}

/* .coll-25{
    width: 100%;
    display: flex;
} */
#firstName {
    width: 48%;

}

#lastName {
    width: 48%;
    margin-left: 2%;

}

button[type='submit'] {
    background: #14cba8;
    color: black;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
}

button[type='submit']:hover {
    background: #0fa78e;
}

/* Column Sizes */
.col-25 {
    flex: 1 1 20%;
    min-width: 120px;
}

.col-50 {
    flex: 1 1 45%;
    min-width: 160px;
}

.col-100 {
    flex: 1 1 100%;
}

/* Responsive */
@media (max-width: 600px) {
    .row {
        flex-direction: column;
    }

    .col-25,
    .col-50,
    .col-100 {
        flex: 1 1 100%;
    }
}
</style>