<template>
    <header class="header">
        <h1><i class="fa-solid fa-circle-user"></i> {{ userAuthenticated }}</h1>

        <button class="button exit" @click="checkoutUser">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const userAuthenticated = ref()
const router = useRouter()

onMounted(() => {
    userAuthenticated.value = window.localStorage.getItem('auth')
})


function checkoutUser() {
    window.localStorage.removeItem('uid')
    window.localStorage.removeItem('auth')
    router.replace('/login')
}

</script>

<style setup>

.header {
    width: 100%;
    height: 70px;
    font-size: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button {
    width: 40px;
    height: 40px;

    font-size: 20px;
}

.exit {
    border: none;
    background: none;
}

</style>