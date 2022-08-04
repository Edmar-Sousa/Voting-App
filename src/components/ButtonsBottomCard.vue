<template>
    <div class="options-voting">
        <button class="button" @click="deleteVotingFromDatabase(id)">
            <i class="fa-solid fa-trash"></i>
        </button>

        <button class="button" @click="updateVotingFromDatabase(id, !isOpen)">
            <i class="fa-solid fa-lock" v-show="!isOpen"></i>
            <i class="fa-solid fa-lock-open" v-show="isOpen"></i>
        </button>

        <button class="button" @click="onShowModal">
            <i class="fa-solid fa-eye"></i>
        </button>
    </div>
</template>

<script setup lang="ts">

import { deleteVoting, changeStatusVoting } from '../utils/database'
import { onShowAlert } from '../utils/alertBus'

const props   = defineProps(['id', 'isOpen', 'onShowModal'])
const userUid = window.localStorage.getItem('uid') as string

async function deleteVotingFromDatabase(id: string) {
    const result = await deleteVoting(userUid, id)

    if (result) 
        onShowAlert('Votação deletada com sucesso!', 'primary')
    
    else
        onShowAlert('Erro ao deleta a votação', 'danger')
}


async function updateVotingFromDatabase(id: string, value: boolean) {
    const result = await changeStatusVoting(userUid, id, value)

    if (result)
        onShowAlert('Votação foi atualizada', 'primary')

    else
        onShowAlert('Erro ao atualizar a votação', 'danger')
}

</script>

<style scoped>

.options-voting {
    width: 100%;
    padding-top: 10px;
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

</style>