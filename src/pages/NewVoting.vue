<template>
    <div class="container">
        <div class="modal" v-show="showModal">
            <p><i class="fa-solid fa-circle-check"></i></p>
            <h3>Sucesso!</h3>
        </div>

        <div class="back-button">
            <router-link to="/">
                <i class="fa-solid fa-arrow-left"></i> Voltar para pagina anterior
            </router-link>
        </div>

        <form @submit.prevent class="form-column">
            <input type="text" class="field field-style" placeholder="Titulo" required v-model="titleVoting">

            <textarea class="field field-style text-area" required placeholder="Descrição" v-model="descriptionVoting">
            </textarea>

            <div class="options-container">
                <p class="title-section">Lista de opções:</p>

                <ol v-show="optionsForm.length > 0">
                    <li v-for="(option, i) in optionsForm" :key="i">
                        {{ option }}

                        <button class="button" @click="deleteOption(i)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>
                </ol>

                <WarningMessage v-show="optionsForm.length == 0">Nenhuma opção, adicione alguma para continuar!</WarningMessage>

                <div class="align">
                    <input type="text" class="field field-style add-option" placeholder="Nova opção" v-model="newOption">

                    <button class="button" @click="addNewOption">
                        <i class="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
            </div>

            <button class="submit-button" @click="createNewVotingInDatabase">
                Criar votação
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import WarningMessage from '../components/Warning.vue'

import { createVoting } from '../utils/database'
import { onShowAlert } from '../utils/alertBus'

const optionsForm = ref(Array<string>())
const newOption = ref<string>('')
const showModal = ref(false)

const titleVoting = ref('')
const descriptionVoting = ref('')

const router = useRouter()

function addNewOption() {
    optionsForm.value?.push(newOption.value)
    newOption.value = ''
}


function deleteOption(index: number) {
    optionsForm.value?.splice(index, 1)
}


async function createNewVotingInDatabase() {
    const votingObject : any = {
        title: titleVoting.value,
        description: descriptionVoting.value,
        options: {}
    }


    if (optionsForm.value.length > 0) {
        const userUid = window.localStorage.getItem('uid') as string

        optionsForm.value.map(option => votingObject.options[option] = 0)
        const result = await createVoting(userUid, votingObject)

        if (result == null) {
            onShowAlert('Erro ao criar a votação', 'danger')
            return
        }

        console.log('ok')
        showModalAndRedirect()
    }

}

function showModalAndRedirect() {
    showModal.value = true

    setTimeout(() => {
        showModal.value = false
        router.replace('/')
    }, 1000)
}

</script>

<style scoped>

.container {
    width: 100%;
    height: 100%;
}


.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 20;

    transition: 400ms;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    background: rgba(0, 0, 0, 0.781);
}

.modal p {
    font-size: 40px;
    color: var(--green-color)
}

.modal h3 {
    color: var(--text-white-color);
}

.back-button {
    width: 100%;
    height: 50px;
    max-width: 900px;

    margin: auto;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: right;
}

.back-button a {
    color: var(--green-color);
    font-weight: 600;
    text-decoration: none;
}

.form-column {
    width: 100%;
    max-width: 900px;
    margin: auto;

    display: flex;
    flex-direction: column;

    padding: 10px;
    gap: 20px;
}

.field {
    width: 100%;
    padding: 10px 5px;

    font-size: 1.4rem;
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

.field::placeholder {
    color: rgb(26, 26, 26);
}

.field-style {
    background: var(--green-bg-color);
    border: none;

    border-radius: 5px;
    font-weight: 600;
    outline: none;
}

.text-area {
    height: 200px;

    background: var(--green-bg-color);
    resize: none;
}

.options-container {
    width: 100%;
    padding: 10px;

    font-size: 1.4rem;
    font-weight: 600;
}

.options-container ol {
    padding-left: 15px;
}

.options-container ol li {
    position: relative;
    height: 30px;
    margin: 5px 0;

    line-height: 30px;
}

.options-container ol li button {
    position: absolute;
    right: 0;
}

.add-option {
    border: none;
    border-bottom: 2px solid var(--green-color);

    border-radius: 0;

    outline: none;
    background: none;
}

.align {
    display: flex;
    align-items: flex-end;

    gap: 5px;

    padding-top: 20px;
}

.button {
    width: 30px;
    height: 30px;

    border: none;
    background: var(--green-color);
    border-radius: 5px;

    font-size: 15px;
}

.submit-button {
    width: 100%;
    height: 40px;

    max-width: 300px;
    margin: auto;

    border: none;
    border-radius: 5px;
    font-weight: 600;

    font-family: Roboto, Arial, Helvetica, sans-serif;

    cursor: pointer;
    background: var(--green-color);
}

.submit-button:hover {
    transform: scale(0.95);
}

</style>