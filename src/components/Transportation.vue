<template>
    <div class="transport-card">
      <!-- TOP ROW -->
      <div class="top">
        <div class="trip-info">
          <!-- Times -->
          <div class="times">
            <div class="time">{{ departureTime }}</div>
            <div class="time">{{ arrivalTime }}</div>
          </div>
  
          <!-- Vertical line + dot -->
          <div class="timeline">
            <span class="line"></span>
            <span class="dot"></span>
          </div>
  
          <!-- Cities -->
          <div class="cities">
            <div class="city">{{ departureCity }}</div>
            <div class="city">{{ arrivalCity }}</div>
          </div>
        </div>
  
        <!-- Book now + price -->
        <div class="action">
          <button class="book-btn">Book Now</button>
          <div class="price">
            <span class="label">price</span>
            <span class="amount">${{ price }}</span>
          </div>
        </div>
      </div>
  
      <!-- BOTTOM ROW -->
      <div class="bottom">
        <div class="distance">
          <span class="icon">🌐</span>{{ distance }}
         
        </div>
        <div class="travel-time">
          <span class="icon">⏱️</span>Travel Time {{ travelTime }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    departureTime: { type: String, required: true }, 
    departureCity: { type: String, required: true },  
    arrivalTime:   { type: String, required: true },  
    arrivalCity:   { type: String, required: true },  
    price:         { type: [Number,String], required: true },
    distance:      { type: String, default: '' },    
    travelTime:    { type: String, default: '' }     
  })
  </script>
  
<style scoped>
.transport-card {

    max-width: 720px;
    width: 100%;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
  
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .trip-info {
    display: flex;
    align-items: flex-start;
  }
  
  /* TIMES */
  .times {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 48px;      /* vertical gap between times */
    margin-right: 12px;
  }
  .time {
    font-size: 14px;
    color: #333;
  }
  
  /* TIMELINE */
  .timeline {

}

.top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.trip-info {
    display: flex;
    align-items: flex-start;
}

/* TIMES */
.times {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 48px;
    /* vertical gap between times */
    margin-right: 12px;
}

.time {
    font-size: 14px;
    color: #333;
}

/* TIMELINE */
.timeline {
    position: relative;
    width: 16px;
    display: flex;
    justify-content: center;
    margin-right: 12px;
    height: 48px;

  }
  .timeline .line {
    position: absolute;
    top: 0;
    width: 2px;
    height: 36px;      /* line length */
    background: #3bd296;
  }
  .timeline .dot {
}

.timeline .line {
    position: absolute;
    top: 0;
    width: 2px;
    height: 36px;
    /* line length */
    background: #3bd296;
}

.timeline .dot {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 8px;
    background: #3bd296;
    border-radius: 50%;
  }
  
  /* CITIES */
  .cities {
}

/* CITIES */
.cities {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 48px;
  }
  .city {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  
  /* ACTION */
  .action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .book-btn {
}

.city {
    font-size: 18px;
    font-weight: 700;
    color: #000;
}

/* ACTION */
.action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.book-btn {
    background: #3bd296;
    color: #000;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  .price {
}

.price {
    margin-top: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .price .label {
    color: #666;
    margin-right: 4px;
  }
  .price .amount {
    color: #000;
    font-weight: 700;
  }
  
  /* BOTTOM ROW */
  .bottom {
}

.price .label {
<<<<<<< Updated upstream
    color: #666;
    margin-right: 4px;
=======
  color: #000000;
  margin: auto;
  margin-right: 4px;
  font-size: 20px;
>>>>>>> Stashed changes
}

.price .amount {
    color: #000;
    font-weight: 700;
}

/* BOTTOM ROW */
.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
    color: #666;
  }
  .bottom .distance,
  .bottom .travel-time {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 6px;
      font-size: 16px;
  }
   
}

.bottom .distance,
.bottom .travel-time {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 6px;
    font-size: 16px;
}
</style>
