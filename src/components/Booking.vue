<template>
    <div class="overlay">
        <div class="popup">
            <!-- Close Icon -->
            <button class="close-btn" @click="handleClose">×</button>

            <template v-if="!showReceipt">
                <h2 class="text">Your Booking</h2>
                <p class="subtitle">
                    If you see my comment I really recommend you to try this hotel, it really good.
                </p>

                <form @submit.prevent="submitBooking">
                    <!-- Name & Email -->
                    <div class="row row-name-email">
                        <div class="col-50">
                            <label for="firstName">Name</label>
                            <input id="firstName" v-model="firstName" placeholder="FirstName" required />
                            <input id="lastName" v-model="lastName" placeholder="LastName" required />
                        </div>
                        <div class="col-50">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" v-model="email" required />
                        </div>
                    </div>

                    <!-- Room Type & Arrival -->
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

                    <!-- Date Split -->
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
                            <textarea id="specialRequests" v-model="specialRequests" rows="4"></textarea>
                        </div>
                    </div>

                    <!-- Submit -->
                    <div class="footer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </template>

            <!-- Receipt Component -->
            <Receipt v-if="showReceipt" :booking="receiptData" @done="handleClose" />
        </div>
    </div>
</template>

<script>
import Receipt from './Receipt.vue';
import qr from '@/assets/picture/qr.png';

export default {
    components: { Receipt },
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
            years: Array.from({ length: 10 }, (_, i) => currentYear + i),
            showReceipt: false,
            receiptData: {}
        };
    },
    methods: {
        submitBooking() {
            this.receiptData = {
                code: Math.random().toString(36).substring(2, 10).toUpperCase(),
                from: 'Phnom Penh',
                to: this.roomType,
                date: `${this.day} ${this.month} ${this.year}`,
                time: '2:00 PM',
                qrImage: qr
            };
            this.showReceipt = true;
        },
        handleClose() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
/* Your original CSS is preserved */
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
    line-height: 1;
}


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
    line-height: 1;
}

.text {
    font-weight: bold;
    text-align: center;
}

h2 {
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

@media (max-width: 600px) {
    .row {
        flex-direction: column;
    }
}
</style>