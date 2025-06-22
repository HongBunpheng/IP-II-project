<template>
    <div class="aim-trainer">
        <div class="hud">
            <div>⏱ Time: {{ Math.max(30 - time, 0).toFixed(1) }}s</div>
            <div>🎯 Hits: {{ hits }}</div>
            <div>⚡ Speed: {{ speed.toFixed(2) }} t/s</div>
            <div>💗 {{ lives }}</div>
        </div>

        <div class="board" @click="handleMiss">
            <div v-for="(target, index) in targets" :key="index" class="target" :style="{
                top: target.y + 'px',
                left: target.x + 'px',
                width: target.size + 'px',
                height: target.size + 'px'
            }" @click.stop="handleHit(index)"></div>

            <div v-if="gameOver" class="result-overlay">
                <h2 v-if="hits >= 10">🎉 You Win!</h2>
                <h2 v-else>🕹 Game Over</h2>
                <p v-if="hits >= 30">🏆 <strong>Super Prize</strong></p>
                <p v-else-if="hits >= 20">🥈 <strong>Good Prize</strong></p>
                <p v-else-if="hits >= 10">🎉 <strong>Common Prize</strong></p>
                <p v-else>🙁 Try Again</p>
                <button class="restart-btn" @click="startGame">🔁 Play Again</button>
            </div>
        </div>

        <button class="start-button" v-if="!isRunning && !gameOver" @click="startGame">
            ▶️ Start Game
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const time = ref(0)
const hits = ref(0)
const speed = ref(0)
const lives = ref(3)
const isRunning = ref(false)
const targets = ref([])
const gameOver = ref(false)
const hitSound = new Audio('/sounds/hit.mp3')
const missSound = new Audio('/sounds/miss.mp3')


let timerInterval = null
let targetInterval = null

function startGame() {
    time.value = 0
    hits.value = 0
    speed.value = 0
    lives.value = 3
    targets.value = []
    isRunning.value = true
    gameOver.value = false

    timerInterval = setInterval(() => {
        time.value += 0.1
        speed.value = hits.value / time.value

        if (time.value >= 30) {
            stopGame()
        }
    }, 100)

    spawnTarget()
}

function stopGame() {
    isRunning.value = false
    gameOver.value = true
    clearInterval(timerInterval)
    clearTimeout(targetInterval)
}

function spawnTarget() {
    if (!isRunning.value) return
    const size = Math.floor(Math.random() * 20 + 30)
    const x = Math.random() * (700 - size)
    const y = Math.random() * (500 - size)
    targets.value.push({ x, y, size })

    targetInterval = setTimeout(spawnTarget, 1000)
}

function handleHit(index) {
    targets.value.splice(index, 1)
    hits.value++
    hitSound.currentTime = 0
    hitSound.play()
}

function handleMiss() {
    lives.value--
    missSound.currentTime = 0
    missSound.play()
    if (lives.value <= 0) stopGame()
}

</script>

<style scoped>
:root {
    --green: #32cd32;
    --green-dark: #228b22;
    --bg: #0c1b1c;
}

.aim-trainer {
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    background: var(--bg);
    color: var(--green);
    min-height: 100vh;
    padding: 20px;
}

.hud {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    color: black;
    padding: 12px;
}

.board {
    position: relative;
    width: 700px;
    height: 500px;
    margin: 20px auto;
    border: 3px solid #32cd32;
    background-color: #001e16;
    overflow: hidden;
    cursor: crosshair;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(50, 205, 50, 0.3);
}

.target {
    position: absolute;
    background: radial-gradient(circle, #ffffff 20%, #32cd32 40%, #ffffff 60%, #32cd32 100%);
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(50, 205, 50, 0.8);
    border-radius: 50%;
    animation: popin 0.2s ease-out;
}

@keyframes popin {
    0% {
        transform: scale(0.1);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.start-button {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: var(--green);
    border: none;
    font-size: 18px;
    color: black;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 2px 8px #0f0;
}

.result-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 20, 10, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.result-overlay h2 {
    font-size: 36px;
    margin-bottom: 15px;
    color: white;
}

.result-overlay p {
    font-size: 24px;
    margin: 8px 0;
    color: white;
}

.restart-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: black;
}
</style>
