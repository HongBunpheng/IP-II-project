<template>
    <div class="notification-container">
      <div class="notification-header">
        <h2>Notification</h2>
        <button class="close-btn">×</button>
      </div>
  
      <div class="filter-section">
        <button class="filter-button">All</button>
      </div>
  
      <div class="section">
        <h3>Today</h3>
        <div class="notification-item">
          <div class="icon">📅</div>
          <span class="message">Hotel have promotion on Khmer New Year Celebration</span>
        </div>
        <div class="notification-item">
          <div class="icon">🏷️</div>
          <span class="message">Restaurant have promotion on Khmer New year celebration</span>
        </div>
        <div class="notification-item">
          <div class="icon">🌧️</div>
          <span class="message">Transportation have promotion on Khmer New Year</span>
        </div>
      </div>
  
      <div class="section">
        <h3>This month</h3>
        <div class="notification-item">
          <div class="icon">📅</div>
          <span class="message">Hotel have promotion on Khmer New Year Celebration</span>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .notification-container {
    width: 400px;
    padding: 16px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
  }
  
  .notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .notification-header h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .close-btn {
    font-size: 20px;
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
  }
  
  .filter-section {
    margin-bottom: 24px;
  }
  
  .filter-button {
    background-color: #dcfce7;
    border: none;
    padding: 10px 24px;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .section {
    margin-bottom: 24px;
  }
  
  .section h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  
  .notification-item {
    display: flex;
    align-items: center;
    background-color: #f3f4f6;
    padding: 12px 16px;
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
  }
  
  .icon {
    font-size: 18px;
    margin-right: 12px;
  }
  
  .message {
    font-size: 14px;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>  