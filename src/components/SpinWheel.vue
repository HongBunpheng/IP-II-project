<template>
    <div class="spinner-wrapper">
        <!-- LEFT: Input + List -->
        <div class="input-area">
            <label for="note">Your choices:</label>
            <input id="note" type="text" v-model="note" @keyup.enter="addNote" placeholder="Type something" />
            <ul class="note-list">
                <li v-for="(item, index) in notes" :key="index">
                    <span>{{ index + 1 }}. {{ item }}</span>
                    <button class="delete-btn" @click="removeNote(index)">🗑️</button>
                </li>
            </ul>

        </div>

        <!-- RIGHT: Spinner -->
        <div class="spinner">
            <div class="spinner__body"></div>
            <button class="spinner__start-button" @click="spin">GO!</button>
            <input type="number" min="1" :max="maxValue" class="spinner__input" v-model.number="inputValue"
                @change="validateInput" />
            <div class="spinner__plate" :key="spinKey" :class="{ 'spinner__plate--spin': isSpinning }"
                @animationend="handleSpinEnd">
                <div v-for="(item, index) in items" :key="index" class="spinner__item" :class="item.position">
                    {{ item.value }}
                </div>
            </div>
            <Fieldset></Fieldset>
        </div>
    </div>
</template>

<script>
import confetti from 'canvas-confetti';
export default {

    data() {
        return {
            inputValue: 0,
            maxValue: 999,
            spinKey: 0,
            isSpinning: false,
            note: '',
            notes: [],
            items: [
                { position: 'spinner__item--top', value: 1 },
                { position: 'spinner__item--right', value: 2 },
                { position: 'spinner__item--bottom', value: 3 },
                { position: 'spinner__item--left', value: 4 }
            ]
        };
    },
    methods: {
        validateInput() {
            if (!this.inputValue || this.inputValue < 1) this.inputValue = 1;
            if (this.inputValue > this.maxValue) this.inputValue = this.maxValue;
        },
        spin() {
            this.randomizeItems();
            this.spinKey++;
            this.isSpinning = false;
            this.$nextTick(() => {
                this.isSpinning = true;
            });
        },
        randomizeItems() {
            this.items = this.items.map((item) => ({
                ...item,
                value: this.random(1, this.inputValue)
            }));
        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        addNote() {
            const trimmed = this.note.trim();
            if (trimmed) {
                this.notes.push(trimmed);
                this.note = '';
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
        // ...other methods
        handleSpinEnd() {
            this.isSpinning = false;
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
        }
    },

};
</script>

<style scoped lang="scss">
$font: 'Dosis', sans-serif;
$white: #f5f5f5;
$main: #4CAF50;
$light-main: #81C784;
$dark-main: #388E3C;

$size: 400px;
$half: 200px;

.spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    padding: 40px;
}

.input-area {
    width: 300px;
    font-family: $font;

    label {
        font-size: 20px;
        margin-bottom: 10px;
        color: $dark-main;
    }

    input[type='text'] {
        font-size: 20px;
        padding: 8px 16px;
        width: 100%;
        border: 2px solid $main;
        border-radius: 10px;
        outline: none;
        margin-bottom: 16px;
        color: $dark-main;

        &:focus {
            border-color: $dark-main;
        }
    }

    .note-list {
        list-style: none;
        padding-left: 0;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #eafbea;
            margin-bottom: 10px;
            padding: 10px 16px;
            border-radius: 8px;
            color: $dark-main;
            font-size: 18px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

            span {
                flex-grow: 1;
            }

            .delete-btn {
                background: transparent;
                border: none;
                color: $dark-main;
                font-size: 20px;
                cursor: pointer;
                padding: 0 6px;

                &:hover {
                    color: red;
                }
            }
        }
    }

}

.spinner {
    position: relative;
    width: $size;
    height: $size;
    background: white;
    box-shadow: 0 0 160px rgba(17, 17, 17, 0.25);
    overflow: hidden;

    &__body {
        position: absolute;
        top: 0;
        left: 0;
        width: $size;
        height: $size;
        border-top: $half solid transparent;
        border-right: $half solid $main;
        border-bottom: $half solid $main;
        border-left: $half solid $main;
        z-index: 200;
    }

    &__start-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 140px;
        width: 140px;
        font-family: $font;
        font-size: 64px;
        font-weight: bold;
        color: $white;
        background-color: $main;
        border: none;
        z-index: 300;
        transition: 0.2s;

        &:hover {
            height: 150px;
            width: 150px;
            background-color: $light-main;
            box-shadow: 0 0 44px rgba(17, 17, 17, 0.25);
        }

        &:active {
            height: 135px;
            width: 135px;
            color: $main;
            background-color: $dark-main;
            animation: shaking 0.15s ease-in-out infinite;
        }
    }

    &__input {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        font-family: $font;
        font-size: 48px;
        font-weight: bold;
        color: $main;
        background: $white;
        padding: 5px 20px;
        border-radius: 36px;
        border: none;
        text-align: center;
        z-index: 300;
        outline: none;
    }

    &__plate {
        position: absolute;
        width: $size;
        height: $size;
        z-index: 100;
        transform-origin: center center;
    }

    &__plate--spin {
        animation: spinning 0.8s ease-out;
    }

    &__item {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transform-origin: 50% 100%;
        font-family: $font;
        font-size: 48px;
        font-weight: bold;
        height: calc($half - 40px);
        padding-top: 40px;
        z-index: 110;
        color: $dark-main;
        text-align: center;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-top: $half solid $white;
            border-right: $half solid transparent;
            border-bottom: $half solid transparent;
            border-left: $half solid transparent;
            z-index: -1;
        }
    }

    &__item--top {
        transform: translateX(-50%) rotate(0deg);
    }

    &__item--right {
        transform: translateX(-50%) rotate(90deg);
    }

    &__item--bottom {
        transform: translateX(-50%) rotate(180deg);
    }

    &__item--left {
        transform: translateX(-50%) rotate(270deg);
    }
}

@keyframes spinning {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(1800deg);
    }
}

@keyframes shaking {
    0% {
        top: calc(50% + 1px);
        left: calc(50% - 1px);
    }

    25% {
        top: calc(50% - 1px);
        left: calc(50% + 1px);
    }

    50% {
        top: calc(50% + 1px);
        left: calc(50% + 1px);
    }

    75% {
        top: calc(50% - 1px);
        left: calc(50% - 1px);
    }
}
</style>
