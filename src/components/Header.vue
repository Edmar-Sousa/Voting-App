<template>
    <header>
        <h1><i class="fa-solid fa-circle-user"></i> {{ userAuthenticated }}</h1>
    </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const userAuthenticated = ref()


onMounted(() => {
    userAuthenticated.value = window.localStorage.getItem('auth')
})

</script>

<style>

</style>