<template>
    <div class="page-container">
        <h1 class="title">Voting App - Login</h1>
        <p class="description">Faça login com uma conta do google</p>

        <CircleButton @click="loginUserWithGoogle" v-show="!showButton">
            <i class="fa-brands fa-google"></i>
        </CircleButton>

        <p class="loading-massage" v-show="showButton">Loading...</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CircleButton from '../components/Button.vue'
import { loginWithGoogle } from '../services/auth'
import { onShowAlert } from '../utils/alertBus'


const router = useRouter()
const showButton = ref(false)

async function loginUserWithGoogle() {
    showButton.value = true
    const result = await loginWithGoogle()
    showButton.value = false

    const message = result ? 'login realizado com sucesso!' : 'erro ao fazer login, tente novamente'
    const type    = result ? 'primary' : 'danger'

    onShowAlert(message, type)

    if (result) 
        router.replace('/')
}

</script>

<style scoped>

.page-container {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 40px;
}

.title {
    font-size: 2.5rem;
}

.description {
    font-size: 1.5rem;
}

.loading-massage {
    font-weight: bold;
    color: var(--green-color);
}

.input {
    max-width: 300px;
    width: 100%;
    height: 40px;

    font-size: 1.5rem;
    outline: none;

    padding: 0 5px;
}

</style>