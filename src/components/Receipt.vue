<template>
  <div class="receipt-wrapper">
    <div class="receipt-card">
      <!-- Header -->
      <div class="receipt-header">
        <span class="header-title">Booking Code</span>
        <span class="header-code">{{ booking.code }}</span>
      </div>

      <!-- Body -->
      <div class="receipt-body">
        <!-- Left Info -->
        <div class="info">
          <div class="info-row">
            <span class="label">From</span>
            <span class="value">{{ booking.from }}</span>
          </div>
          <div class="info-row">
            <span class="label">To</span>
            <span class="value">{{ booking.to }}</span>
          </div>
          <div class="info-row datetime-row">
            <div class="datetimelabel">
              <span class="label">Date</span>
              <span class="value">{{ booking.date }}</span>
            </div>
            <div class="datetimelabel">
              <span class="label">Time</span>
              <span class="value">{{ booking.time }}</span>
            </div>
          </div>
        </div>

        <!-- QR Section -->
        <div class="qr-section">
          <span class="qr-label">Scan to Pay</span>
          <img :src="booking.qrImage" alt="QR code" class="qr-code" />
        </div>
      </div>

      <!-- Footer -->
      <div class="receipt-footer">
        <button class="complete-btn" @click="$emit('done')">Complete Booking</button>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Receipt',
  props: {
    booking: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.receipt-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to right, #f9f9f9, #e9f7f6);
}

.receipt-card {
  width: clamp(300px, 80vw, 520px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: fadeIn 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  position: relative;
}

.receipt-header {
  background: #14cba8;
  color: white;
  text-align: center;
  padding: 16px;
}

.header-title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.header-code {
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
}

.receipt-body {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 20px;
  flex-wrap: wrap;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-row {
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: bold;
  color: #444;
  font-size: 14px;
}

.value {
  font-size: 15px;
  color: #222;
  margin-top: 2px;
}

.datetime-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.datetimelabel {
  display: flex;
  flex-direction: column;
}

.qr-section {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.qr-label {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
}

.qr-code {
  width: 150px;
  height: 150px;
  border: 2px solid #14cba8;
  border-radius: 12px;
  padding: 6px;
  background: #f8f8f8;
  object-fit: contain;
}

.receipt-footer {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  z-index: 2;
  position: relative;
  gap: 10px;
}

.complete-btn,
.close-btn {
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-btn {
  background-color: #ccc;
  color: #000;
}

.complete-btn:hover {
  background-color: #e77c00;
}

.close-btn:hover {
  background-color: #999;
}

@media (max-width: 600px) {
  .receipt-body {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .qr-section {
    margin-top: 20px;
  }

  .receipt-footer {
    flex-direction: column;
    align-items: center;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
