<template>
    <div class="weather-card">
      <div class="weather-top">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
          alt="Cloudy"
          class="weather-icon"
        />
        <div class="temperature">{{ temperature }}°</div>
      </div>
      <div class="description">{{ description }}</div>
      <div class="details">
        <div class="detail">
          <span class="icon">🌬️</span>
          <span>{{ windSpeed }} km/h</span>
        </div>
        <div class="detail">
          <span class="icon">💧</span>
          <span>{{ humidity }} %</span>
        </div>
        <div class="detail">
          <span class="icon">☀️</span>
          <span>{{ uvIndex }} of 10</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        temperature: 32,
        description: "Sunny Cloudy",
        windSpeed: 16,
        humidity: 83,
        uvIndex: 2,
      };
    },
  };
  </script>
  
  <style scoped>
  .weather-card {
    background: #8f9f8a;
    border-radius: 16px;
    box-shadow: 0 18px 10px rgba(39, 41, 39, 0.1);
    padding: 10px;
    max-width: 280px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .weather-top {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .weather-icon {
    width: 68px;
    margin-right: 30px;
  }
  
  .temperature {
    font-size: 65px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 4px 20px rgba(182, 173, 173, 0.1);
  }
  
  .description {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  
  .details {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    color: #fff;
  }
  
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon {
    font-size: 20px;
  }
  </style>