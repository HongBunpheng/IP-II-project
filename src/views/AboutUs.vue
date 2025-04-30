<template>
  <div class="about">
    <!-- Hero Section -->
    <div class="about-header">
      <img src="../assets/aboutus.png" alt="AboutUs Image" />
    </div>

    <!-- Main About Page -->
      <div class="about-content">
        <div class="about-text">
          <h2>About TRIPTREK.com</h2>
          <p>
            We are passionate about creating unforgettable travel experiences. Whether you seek adventure, relaxation, or cultural exploration, we offer tailored trips to the world's most breathtaking destinations. Our team of experts ensures seamless planning, top-notch accommodations, and unique itineraries that suit every traveler’s needs. With a commitment to quality and customer satisfaction, we make every journey stress-free and memorable. Let us turn your travel dreams into reality!
          </p>
        </div>
        <div class="about-image">
          <img src="@/assets/aboutus1.png" alt="Travelers" />
        </div>
      </div>

    <div class="teams-container">
      <div class="teams-header">
        <h2>Our Teams</h2>
        <p>Travel planning (TRIPTREK)</p>
      </div>

      <div class="teams-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <img :src="member.image" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bunpheng from '@/assets/bunpheng.png'
import dane from '@/assets/dane.png'
import nita from '@/assets/nita.png'
import kado from '@/assets/kado.png'
import nimol from '@/assets/nimol.png'

export default {
  data() {
    return {
      teamMembers: [
        { name: 'Hong Bunpheng', image: bunpheng, role: 'FullStack Developer' },
        { name: 'Deang Dane', image: dane, role: 'FullStack Developer' },
        { name: 'Chum Nita', image: nita, role: 'FullStack Developer' },
        { name: 'Chiv Kado', image: kado, role: 'FullStack Developer' },
        { name: 'Chan Nimol', image: nimol, role: 'FullStack Developer' },
      ]
    }
  }
}
</script>


<style scoped>
.about {
  font-family: "Arial", sans-serif;
  
}
.about-header {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.about-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 5rem;
  width: 90%;
  margin: 3rem auto 3rem;
}

.about-text {
  flex: 1 1 80%;
}

.about-text h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

.about-text p {
  font-size: 1.1rem;
  color: #444;
  line-height: 2;
  text-align: justify;
  margin-bottom: 5rem;
}

.about-image {
  flex: 1 1 48%;
  text-align: center;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  object-fit: cover;
}

/* Teams Section */
.teams-container {
  text-align: center;
  margin-top: 3.2rem;
}

.teams-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.teams-header p {
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 3rem;
}

.teams-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;
}

.team-member {
  width: 200px;
  text-align: center;
}

.team-member img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.team-member img:hover {
  transform: scale(1.05);
}

.team-member h3 {
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: bold;
}

.team-member p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}
</style>