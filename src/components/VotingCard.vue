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

        <div class="options-voting">
            <button class="button" @click="deleteVotingFromDatabase(voting.id)">
                <i class="fa-solid fa-trash"></i>
            </button>

            <button class="button" @click="updateVotingFromDatabase(voting.id, !voting.isOpen)">
                <i class="fa-solid fa-lock" v-show="!voting.isOpen"></i>
                <i class="fa-solid fa-lock-open" v-show="voting.isOpen"></i>
            </button>

            <button class="button" @click="showModal = !showModal">
                <i class="fa-solid fa-eye"></i>
            </button>
        </div>

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

                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Opção</th>
                            <th>Votos</th>
                            <th>%</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(object, i) in optionsArray" :key="i">
                            <td>{{ i }}</td>
                            <td>{{ object.option }}</td>
                            <td>{{ object.value }}</td>
                            <td>{{ convertPercent(object.value) }}%</td>
                        </tr>

                    </tbody>
                </table>

                <div class="options-voting">
                    <button class="button" @click="deleteVotingFromDatabase(voting.id)">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                    <button class="button" @click="updateVotingFromDatabase(voting.id, !voting.isOpen)">
                        <i class="fa-solid fa-lock" v-show="!voting.isOpen"></i>
                        <i class="fa-solid fa-lock-open" v-show="voting.isOpen"></i>
                    </button>

                    <button class="button" @click="showModal = !showModal">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref, computed } from 'vue'
import { deleteVoting, changeStatusVoting } from '../utils/database'
import { onShowAlert } from '../utils/alertBus'

const props = defineProps(['voting'])
const showModal = ref(false)

const linkCopy = `${ window.location.href}${ props.voting.id }`

const optionsArray = computed(() => { 
    return Object.keys(props.voting.options).map(option => ({ option, value: props.voting.options[option] }) )
})

function convertPercent(value: string) {
    return (Number(value) * 100) / (props.voting.person == 0 ? 1 : props.voting.person)
}

async function deleteVotingFromDatabase(id: string) {
    const userUid = window.localStorage.getItem('uid') as string
    const result = await deleteVoting(userUid, id)

    if (result) 
        onShowAlert('Votação deletada com sucesso!', 'primary')
    
    else
        onShowAlert('Erro ao deleta a votação', 'danger')
}

async function updateVotingFromDatabase(id: string, value: boolean) {
    const userUid = window.localStorage.getItem('uid') as string
    const result = await changeStatusVoting(userUid, id, value)

    if (result)
        onShowAlert('Votação foi atualizada', 'primary')

    else
        onShowAlert('Erro ao atualizar a votação', 'danger')
}

async function copyLink() {
    const element = document.getElementById('link-voting') as HTMLInputElement
    await navigator.clipboard.writeText(element.value)
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

.options-voting {
    width: 100%;
    padding-top: 10px;
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

.button {
    width: 25px;
    height: 25px;

    font-size: 15px;

    cursor: pointer;

    background: none;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
}

.button:nth-child(1) {
    margin-left: 0;
    background: var(--red-color);
}

.button:nth-child(2) {
    background: var(--blue-color);
}

.button:nth-child(3) {
    background: var(--yellow-color);
}

.button.close {
    position: absolute;
    top: 0;
    right: 0;

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

.table {
    width: 100%;
    border-radius: 3px;
    border-collapse: collapse;

    border: 1px solid rgba(56, 56, 56, 0.692);
}

.table thead tr {
    background: var(--green-bg-color);
}

.table tr {
    height: 25px;
}

.table td {
    text-align: center;
}

.table tr:nth-child(even) {
    background: var(--green-bg-color);
}

</style>