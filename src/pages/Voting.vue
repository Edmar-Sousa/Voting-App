<template>
    <div class="container">
        <div class="voting-view flex" v-if="voting && !isSearchVoting">
            <h2 class="title">{{ voting.title }}</h2>
            <p class="description">{{ voting.description }}</p>

            <Warning v-show="!voting.isOpen">
                A votação já foi encerrada!
            </Warning>

            <div class="flex" v-if="voting.isOpen && !isVoting">
                <p class="description black-color">Click em uma opção para votar!</p>
                <div>
                    <button v-for="(option, i) in votingOptions" :key="i" class="button" @click="votingOption(option.key)">
                        {{ option.key }}
                    </button>
                </div>
            </div>

            <div class="message message-voting-confirm" v-else-if="voting.isOpen && isVoting">
                <p><i class="fa-solid fa-circle-check"></i> Você já está participando! Aguarde o resultado</p>
            </div>

            <div class="result" v-show="!voting.isOpen">
                <h3>Resultados:</h3>
                <p class="description black-color">Quantidade de participantes: <span class="green">{{ voting.person }} participantes</span></p>

                <ResultVoting :options="voting.options" :person="voting.person" />
            </div>
        </div>

        <div class="voting-view" v-else-if="!voting && isSearchVoting">
            <div class="message message-voting-confirm">
                <p>Carregando... Aguarde um minuto!</p>
            </div>
        </div>

        <div class="voting-view" v-else>
            <div class="message not-found-message">
                <p><i class="fa-solid fa-circle-exclamation"></i> Votação não foi encontrada!</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { saveVotingLocalStorage, checkIsVotingInLocalStorage } from '../utils/localStorageVoting'
import { getOneVoting, updateVotingOption } from '../utils/database'
import { onShowAlert } from '../utils/alertBus'

import Warning from '../components/Warning.vue'
import ResultVoting from '../components/ResultVoting.vue'

const router = useRoute()

const uid = router.params.uid as string
const id  = router.params.id as string

const voting = ref()
const isSearchVoting = ref(true)
const isVoting = ref(true)

onMounted(() => {
    isVoting.value = checkIsVotingInLocalStorage(id)

    getOneVoting(uid, id, (data: Object) => {
        isSearchVoting.value = false
        voting.value = data
    })
})

const votingOptions = computed(() => {
    return Object.keys(voting.value.options).map(option => ({ key: option, value: voting.value.options[option] }) )
})


async function votingOption(key: string) {
    const result = await updateVotingOption(uid, id, key, voting.value.options)
    
    if (!result) {
        onShowAlert('Erro ao votar, tente novamente', 'danger')
        return
    }

    onShowAlert('Voto feito com sucesso!', 'primary')
    saveVotingLocalStorage(id)
    isVoting.value = true
}

</script>

<style scoped>

.container {
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.voting-view {
    max-width: 500px;
    width: 100%;
    padding: 10px;

    
    gap: 25px;
}

.title {
    font-size: 1.7rem;
}

.description {
    font-weight: 600;
    font-size: 1.5rem;

    color: var(--text-gray-color);
}

.black-color {
    color: var(--black-color);
}

.button {
    width: 300px;
    height: 35px;

    margin: 5px calc(50% - 150px);

    font-family: Roboto, Arial, Helvetica, sans-serif;
    border-radius: 5px;

    border: none;
    font-weight: 600;
    background: var(--green-color);
    cursor: pointer;
}

.green {
    color: var(--green-color);
}

.button:hover {
    transform: scale(0.97);
}

.result {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.message {
    width: 100%;
    height: 40px;

    border-radius: 5px;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
}

.not-found-message {
    background: var(--red-color);
}

.message-voting-confirm {
    background: var(--green-color);
}

</style>