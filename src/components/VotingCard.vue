<template>
    <div class="voting">
        <h3>
            {{ voting.title }}
        </h3>

        <ul>
            <li><i class="fa-solid fa-user"></i> {{ voting.person }}</li>
            <li>
                <i class="fa-solid fa-lock" v-show="!voting.isOpen"></i>
                <i class="fa-solid fa-lock-open" v-show="voting.isOpen"></i>
                {{ voting.isOpen ? 'Votação aberta' : 'Votação encerrada' }}
            </li>
        </ul>

        <input type="text" class="link-copy" id="link-voting" :value="linkCopy" />

        <button class="buttonCopy" @click="copyLink">
            Copiar link para compartilhar
        </button>

        <ButtonsBottomCard :id="voting.id" :isOpen="voting.isOpen" :onShowModal="showOrHiddenModal" />

        <div class="modal" v-show="showModal">
            <div class="view-voting">
                <button class="button close" @click="showModal = !showModal">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <h3>{{ voting.title }}</h3>
                <p class="description">{{ voting.description }}</p>

                <h3>Estatísticas:</h3>

                <p>Quantidade de participantes: <span class="green">{{ voting.person }}</span></p>
                <p>Status da votação: <span class="green">{{ voting.isOpen ? 'recebendo votação' : 'votação encerrada' }}</span></p>

                <h3>Opções:</h3>

                <ResultVoting :options="voting.options" :person="voting.person" />

                <ButtonsBottomCard :id="voting.id" :isOpen="voting.isOpen" :onShowModal="showOrHiddenModal" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { onShowAlert } from '../utils/alertBus'

import ResultVoting from './ResultVoting.vue'
import ButtonsBottomCard from './ButtonsBottomCard.vue'

const props = defineProps(['voting'])
const showModal = ref(false)

const userUid = window.localStorage.getItem('uid') as string
const linkCopy = `${ window.location.href}voting/${ userUid }/${ props.voting.id }`


async function copyLink() {
    const element = document.getElementById('link-voting') as HTMLInputElement
    await navigator.clipboard.writeText(element.value)

    onShowAlert('Link copiado!', 'primary')
}

function showOrHiddenModal() {
    showModal.value = !showModal.value
}

</script>

<style scoped>

.modal {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;

    background: rgba(0, 0, 0, 0.486);
}

.buttonCopy {
    width: 100%;
    height: 30px;

    cursor: pointer;
    font-weight: 600;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    margin-top: 10px;
    background: var(--blue-color);
    border: none;
    border-radius: 5px;
}

.buttonCopy:hover {
    transform: scale(0.98);
}

.link-copy {
    display: none;
}

.voting {
    width: 100%;
    height: 100%;
    padding: 20px 10px;

    border-radius: 5px;

    background: var(--green-bg-color);
}

.voting h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.voting ul {
    list-style: none;
}

.voting ul li {
    font-weight: 600;
}

.button.close {
    position: absolute;
    top: 0;
    right: 0;

    cursor: pointer;
    border: none;
    background: none;
}


.view-voting {
    max-width: 700px;
    width: 100%;
    padding: 30px 10px 20px;
    border-radius: 5px;

    position: relative;
    pointer-events: visible;

    background: var(--white-color);
}

.view-voting h3 {
    font-size: 1.7rem;
}

.view-voting p {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.view-voting span.green {
    color: var(--green-color);
}
.view-voting p.description {
    margin: 20px 0;
    color: var(--text-gray-color);
}

</style>