<template>
    <div class="flex justify-center items-center mt-20">
        <div class="w-full max-w-sm">
            <div>
                <button :disabled='gameIsRunning' @click="startGame()" :class="[gameIsRunning ? 'cursor-not-allowed opacity-50' : 'opacity-100 hover:bg-white hover:text-black text-white', 'bg-black  font-bold py-2 m-2 px-4 border border-black rounded focus:shadow-outline']">
                    Start
                </button>
                <button :disabled='!gameIsRunning' @click="pauseGame()" :class="[!gameIsRunning ? 'cursor-not-allowed opacity-50' : 'opacity-100 hover:bg-white hover:text-black text-white', 'bg-black  font-bold py-2 m-2 px-4 border border-black rounded focus:shadow-outline']">
                    Stop
                </button>
            </div>
            <div>
                <div>Total Clicks: {{ totalClicks }} </div>
                <div>Score: {{ score.toLocaleString() }}</div>
                <div>Time: {{ formatTime() }}</div>
                <div>Goal: {{ goal.toLocaleString() }}</div>
            <div>
                <button :disabled='!gameIsRunning' @click="clickButton()" :class="[!gameIsRunning ? 'cursor-not-allowed opacity-50' : 'opacity-100 hover:bg-white hover:text-black text-white', 'bg-black font-bold active:animate-wiggle py-2 m-2 px-4 border border-black rounded focus:shadow-outline']">
                    CLICK {{ clickIncrementValue }}
                </button>
            </div>
                <div class="w-full bg-gray-300 rounded-full dark:bg-gray-700">
                    <div class="bg-purple-500 text-xs border font-bold border-purple-500 text-gray-900 text-center p-0.5 leading-none rounded-full" :style="{width: `${calculatePercentageToGoal()}%`}"> {{ calculatePercentageToGoal() }}% </div>
                </div>
            </div>
            <div>
                <template v-for="item in increaseValues" :key="item.value">
                    <button
                    :disabled='score < item.cost || !gameIsRunning'
                    @click="changeClickAmount(item.value, item.cost, false)" 
                    :class="[score < item.cost || !gameIsRunning ? 'cursor-not-allowed opacity-50' : 'opacity-100 hover:bg-white hover:text-black text-white', 'bg-black  font-bold py-2 m-2 px-4 border border-black rounded focus:shadow-outline']">
                    + {{ item.value.toLocaleString() }} Click
                    </button>
                </template>
            </div>
            <div>
                <template v-for="item in increaseValues" :key="item.value">
                    <button
                    :disabled='score < item.cost || !gameIsRunning'
                    @click="increaseTimeIncrementValueByX(item.value, item.cost)" 
                    :class="[score < item.cost || !gameIsRunning ? 'cursor-not-allowed opacity-50' : 'opacity-100 hover:bg-white hover:text-black text-white', 'bg-black  font-bold py-2 m-2 px-4 border border-black rounded focus:shadow-outline']">
                    + {{ item.value.toLocaleString() }} / sec
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";


let totalClicks = ref(0);
let score = ref(0);
let timeIncrementValue = ref(0)
let clickIncrementValue = ref(1)
let interval = null
let interval2 = null
let gameIsRunning = ref(false)
let elapsedTime = ref(0)
let goal = ref(1_000_000_000)

const increaseValues = [
  { value: 10, cost: 100},
  { value: 100, cost: 1000},
  { value: 1000, cost: 10000},  
  { value: 100000, cost: 1000000}
]

const startGame = () => {
    resetGame()
    gameIsRunning.value = true
    startTime();
    addTimeIncrementValuePerSecond();
}

const resetGame = () => {
    gameIsRunning.value = false
    score.value = 0
    totalClicks.value = 0
    clickIncrementValue.value = 1
    timeIncrementValue.value = 0
    elapsedTime.value = 0
    clearInterval(interval)
    clearInterval(interval2)
}

const pauseGame = () => {
    gameIsRunning.value = false
    clearInterval(interval)
    clearInterval(interval2)
}

const calculatePercentageToGoal = () => {
    let percentageToGoal = (score.value / goal.value) * 100
    if(score.value >= goal.value || score.value < 0) {
        pauseGame()
    }
    return Math.floor(percentageToGoal)
}

const clickButton = () => {
    totalClicks.value += 1
    increaseScoreByClicking();
};

const formatTime = () => {
    const date = new Date();
    date.setHours(0,0,0,0)
    date.setSeconds(elapsedTime.value / 1000);
    const utc = date.toLocaleTimeString();
    var time = utc.substring(utc.indexOf(":") - 2, 10)
    return time
}

const startTime = () => {
    interval2 = setInterval(() => {
        elapsedTime.value += 1000;
    }, 1000);
}
const changeClickAmount = (value, cost, subtract) => {
    if (subtract === true) {
        score.value -= cost
        clickIncrementValue.value -= value
    } else {
        score.value -= cost
        clickIncrementValue.value += value
    }
}

const increaseScoreByClicking = () => {
    score.value += clickIncrementValue.value
};

const increaseTimeIncrementValueByX = (value, cost) => {
    totalClicks.value += 1
    score.value -= cost
    timeIncrementValue.value += value
};

const decreaseTimeIncrementValueByX = (value) => {
    totalClicks.value += 1
    clickIncrementValue.value -= value
    score.value -= value
    timeIncrementValue.value -= value
};

const addTimeIncrementValuePerSecond = () => {
    interval = setInterval(() => {
        score.value += timeIncrementValue.value;
  }, 500);
};
   
</script>



