<template>
  <div class="budget-card">
    <img src="@/assets/budget.png" alt="Budget Feature" class="budget-image" />
    <div class="overlay">
      <h3 class="title">Budget Recom</h3>
      <p class="desc">Analysis and recommend the best <br>place with your budget</p>
      <button class="btn">Let's go</button>
    </div>
  </div>
</template>

<script setup>
// static content only
</script>

<style scoped>
.budget-card {
  width: 400px;
  height: 470px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.budget-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.overlay .desc{
  position: absolute;
  left: -1.2rem;
  bottom: 30px;
  width: 100%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 30px 20px;
  color: white;
  text-align: center;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
}
/* .desc {
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.5;
} */
.btn {
  background: #23c67c;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1ab06b;
}
</style>
