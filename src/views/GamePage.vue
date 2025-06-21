<template>
    <div class="game-page">

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-images">
                <img src="@/assets/picture/centre market.jpg" alt="Market" />
                <img src="@/assets/picture/wat phnom.jpg" alt="Park" />
            </div>
            <div class="hero-overlay">
                <h1>
                    Increase your happiest<br />
                    of traveling with the<br />
                    <span class="highlight">game</span>
                </h1>
            </div>
        </section>


        <!-- Most Played Section -->
        <section class="most-played-section">
            <div class="most-played-content">
                <div class="image-side">
                    <img src="@/assets/picture/spin-wheel.png" alt="Spin Wheel" />
                </div>
                <section class="most-played-centered">
                    <h2>Most played</h2>
                    <p class="played-by">Played by 100+ user</p>
                    <p class="description">
                        Spin wheel games are popular because they’re exciting, easy to play, and highly engaging,
                        offering a gambling-like thrill, frequent rewards, free spins, and social interaction. Keeping
                        players entertained and coming back for more.
                    </p>
                    <button @click="playGame('Spin wheel')">Play</button>
                </section>

            </div>
        </section>


        <!-- All Games Section -->
        <section class="all-games-section">
            <h2>All Games</h2>
            <p class="subtitle">Choose a game between our two game's mode</p>

            <div class="games-grid">
                <div v-for="game in games" :key="game.name" class="game-card">
                    <div class="card-image-wrapper">
                        <img :src="game.image" :alt="game.name" />
                        <div class="overlay-label">
                            <div class="label-bar"></div>
                            <span>{{ game.label }}</span>
                        </div>
                        <div class="bottom-border"></div>
                    </div>
                    <h3>{{ game.name }}</h3>
                </div>
            </div>

        </section>


    </div>
</template>

<script setup>
import hangmanImg from '@/assets/picture/hangman.png'
import spinWheelImg from '@/assets/picture/spin-wheel.png'
import diceImg from '@/assets/picture/dice-roller.png'
import aimImg from '@/assets/picture/aiming.png'
import puzzleImg from '@/assets/picture/puzzle.png'
import snakeeImg from '@/assets/picture/snakee.png'

const games = [
    { name: 'Hangman', image: hangmanImg, label: 'INDECISIVE' },
    { name: 'Spin wheel', image: spinWheelImg, label: 'INDECISIVE' },
    { name: 'Dice roller', image: diceImg, label: 'INDECISIVE' },
    { name: 'Aiming', image: aimImg, label: 'HUNTER' },
    { name: 'Puzzle', image: puzzleImg, label: 'HUNTER' },
    { name: 'Snakee', image: snakeeImg, label: 'HUNTER' },
]

function playGame(gameName) {
    alert(`Launching ${gameName}...`)
}
</script>

<style scoped>
.game-page {
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Hero */
.hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-color: black;
}

.hero-images {
    display: flex;
    width: 100%;
    height: 100%;
}

.hero-images img {
    width: 50%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    padding: 0 1rem;
}

.hero-overlay .highlight {
    color: white;
}


/* Most Played */
.most-played-section {
    background-color: #f0f8f4;
    padding: 3rem 1rem;
    margin-top: 20px;
}

.most-played-centered {
    padding: 3rem 1rem;
}

.most-played-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    gap: 2rem;
    padding-left: 20px;
}

.image-side img {
    width: 250px;
    max-width: 100%;
    border-top-left-radius: 120px;
    border-top-right-radius: 120px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.most-played-centered {
    text-align: center;
}

.most-played-centered h2 {
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    margin-bottom: 0.3rem;
}

.most-played-centered .played-by {
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.most-played-centered .description {
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
}

.most-played-centered button {
    background-color: #006d43;
    color: white;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.most-played-centered button:hover {
    background-color: #004e30;
    transform: scale(1.03);
}

/* All Games */
.all-games-section {
    padding: 3rem 1rem;
    text-align: center;
}

.all-games-section h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
}

.all-games-section .subtitle {
    color: #444;
    font-size: 0.95rem;
    margin-bottom: 2rem;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

.game-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-image-wrapper {
    position: relative;
    width: 100%;
    height: 230px;
    border-radius: 6px;
    overflow: hidden;
}

.card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 6px;
}

/* Label in bottom-left corner */
.overlay-label {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.0);
    padding: 0.6rem 0;
}

.label-bar {
    width: 4px;
    height: 14px;
    background-color: #004e45;
    margin-right: 0.5rem;
}

.overlay-label span {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Thin bottom border line */
.bottom-border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: #004e45;
}

/* Game name */
.game-card h3 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
}
</style>
