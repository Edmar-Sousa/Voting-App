<template>
    <button 
        class="small-button circle-button" 
        :class="{ 'animation-in' : mouseEnterInButton, 'animation-out' : !mouseEnterInButton && mouseEnterInButton != null }"
        @mouseenter="mouseEnterInButton = true"
        @mouseleave="mouseEnterInButton = false"
        >
            <slot></slot>
    </button>
</template>

<script setup>

import { ref } from 'vue'

const mouseEnterInButton = ref(null)


</script>

<style scoped>

.small-button {
    width: 40px;
    height: 40px;

    cursor: pointer;
}

.circle-button {
    font-size: 20px;

    border: 1px solid var(--black-color);
    background: none;
    color: var(--black-color);

    border-radius: 20px;
    transition: 1s;
}

.animation-in {
    box-shadow: 0 0 10px var(--green-color);
    color: var(--green-color);
    animation: animation-button-in 800ms forwards;
}

.animation-out {
    animation: animation-button-out 800ms;
}

@keyframes animation-button-in {
    50% {
        border-radius: 3px;
        width: 40px;
    }

    100% {
        border-radius: 3px;
        width: 100px;
    }
}


@keyframes animation-button-out {
    0% {
        border-radius: 3px;
        width: 100px;
    }

    50% {
        border-radius: 3px;
        width: 40px;
    }

    100% {
        border-radius: 20px;
        width: 40px;
    }
}

</style>