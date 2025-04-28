<template>
    <div class="search-bar">
      <!-- Destination Dropdown -->
      <div class="field">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"/>
        </svg>
        <select v-model="destination" class="dropdown">
          <option disabled value="">Destination</option>
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Sihanoukville</option>
          <option>Battambang</option>
          <option>Kampot</option>
        </select>
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
  
      <!-- Divider -->
      <div class="divider"></div>
  
      <!-- Search Field -->
      <div class="field">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
        </svg>
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="destination ? `Hotels in ${destination}` : 'Hotels in Phnom Penh'"
          class="text-input"
        />
      </div>
  
      <!-- Search Button -->
      <button class="search-button" @click="submitSearch">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        destination: '',
        searchQuery: ''
      };
    },
    methods: {
      submitSearch() {
        if (!this.destination) {
          alert('Please select a destination');
          return;
        }
        console.log('Search for:', this.searchQuery, 'in', this.destination);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    background: white;
    padding: 12px 20px;
    border-radius: 20px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1000px;
    border: 1px solid #e0e0e0;
  }
  
  /* Shared layout for dropdown and input */
  .field {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
  }
  
  .icon {
    width: 18px;
    height: 18px;
    color: #888;
    margin-right: 8px;
  }
  
  .arrow {
    position: absolute;
    right: 10px;
    width: 14px;
    height: 14px;
    color: #888;
    pointer-events: none;
  }
  
  /* Dropdown */
  .dropdown {
    appearance: none;
    border: none;
    background: transparent;
    padding-right: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    width: 100%;
    outline: none;
    cursor: pointer;
  }
  
  /* Text input */
  .text-input {
    border: none;
    background: transparent;
    font-size: 14px;
    color: #333;
    width: 100%;
    outline: none;
  }
  
  /* Divider */
  .divider {
    height: 30px;
    width: 1px;
    background-color: #e0e0e0;
    margin: 0 16px;
  }
  
  /* Button */
  .search-button {
    background-color: #555;
    color: white;
    border: none;
    padding: 10px 24px;
    margin-left: 16px;
    border-radius: 999px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .search-button:hover {
    background-color: #333;
  }
  @media (max-width: 768px) {
  .search-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 16px;
    border-radius: 16px;
  }

  .field {
    width: 100%;
    flex: none;
  }

  .dropdown,
  .text-input {
    width: 100%;
  }

  .divider {
    display: none;
  }

  .search-button {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
}

  </style>
  