<template>
    <div class="receipt-wrapper">
        <div class="receipt-card">
            <!-- Header -->
            <div class="receipt-header">
                <span class="header-title">Code</span>
                <span class="header-code">{{ booking.code }}</span>
            </div>

            <!-- Body -->
            <div class="receipt-body">
                <!-- Left info -->
                <div class="info">
                    <div class="info-row">
                        <span class="label">From </span>
                        <span class="value">: </span>
                        <span class="value">{{ booking.from }}</span>
                    </div>
                    <div class="info-row">
                        <span class="labelTo">To</span>
                        <span class="value">: </span>
                        <span class="value">{{ booking.to }}</span>
                    </div>
                    <div class="info-row datetime-row">
                        <div class="datetimelabel">
                            <span class="label">Date &</span>
                            <span class="label">Time</span>
                        </div>
                        <div class="datetime">
                            <span class="date">{{ booking.date }}</span>
                            <span class="time">{{ booking.time }}</span>
                        </div>
                    </div>
                </div>

                <!-- Right QR -->
                <div class="qr-section">
                    <span class="label">Scan QR</span>
                    <img :src="qrImage" alt="QR code" class="qr-code" />
                </div>
            </div>

            <!-- Footer -->
            <div class="receipt-footer">
                <button class="complete-btn">Complete success</button>
            </div>
        </div>
    </div>
</template>

<script>
import qr from '@/assets/picture/qr.png'  // replace with your actual QR file

export default {
    name: 'ReceiptCard',
    props: {
        booking: {
            type: Object,
            default: () => ({
                code: 'NN4648pp-sr',
                from: 'Phnom Penh',
                to: 'Siem Reap',
                date: '25 Oct 2025',
                time: '2:00 PM'
            })
        },
        qrImage: {
            type: String,
            default: qr
        }
    }
}
</script>

<style scoped>
.receipt-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.receipt-card {
    width: clamp(300px, 80vw, 500px);
    height: min-content;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

/* --- Header --- */
.receipt-header {
    background-color: #25d3b7;
    text-align: center;
    padding: 12px 0;
}

.header-title {
    display: block;
    color: black;
    font-size: 14px;
    font-weight: 500;
}

.header-code {
    display: block;
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-top: 4px;
}

/* --- Body --- */
.receipt-body {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}
.value {
    display: flex;
    justify-content: flex-start;
}

.labelTo {
    margin-right: 19px;
}
/* Left info column */
.info {
    flex: 1;
}

.info-row {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: baseline;
    column-gap: 5px;
    margin-bottom: 8px;
}

.info-row.datetime-row {
    display: flex;
    flex-direction: column;

}

.info-row.datetime-row .datetimelabel {
    grid-column: 1 / 2;
    display: flex;
    gap: 5px;
}

.info-row.datetime-row .datetime {
    grid-column: 2 / 4;
    display: flex;
    gap: 8px;
}

.info-row.datetime-row .date,
.info-row.datetime-row .time {
    font-size: 9px;
    color: #555;
    line-height: 1.4;
}


/* Right QR column */
.qr-section {
    flex: 0 0 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.qr-section .label {
    margin-bottom: 8px;
}

.qr-code {
    width: 200px;
    height: 200px;
    object-fit: contain;
}

/* --- Footer --- */
.receipt-footer {
    padding: 16px;
    display: flex;
    justify-content: center;
}

.complete-btn {
    background-color: #ff8c00;
    color: black;
    border: none;
    border-radius: 10px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}

.complete-btn:hover {
    background-color: #e07b00;
}

/* Small-screen fallback */
@media (max-width: 500px) {
    .receipt-body {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .info {
        width: 100%;
    }

    .qr-section {
        margin-top: 12px;
    }
}
</style>
