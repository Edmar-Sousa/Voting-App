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
            <input type="text" class="field field-style" placeholder="Titulo">
            <textarea class="field field-style text-area">Descrição...</textarea>

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

            <button class="submit-button">
                Criar votação
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import WarningMessage from '../components/Warning.vue'

const optionsForm = ref(Array<string>())
const newOption = ref<string>('')
const showModal = ref(false)

function addNewOption() {
    optionsForm.value?.push(newOption.value)
    newOption.value = ''
}


function deleteOption(index: number) {
    optionsForm.value?.splice(index, 1)
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

    border: none;
    border-radius: 5px;
    font-weight: 600;

    font-family: Roboto, Arial, Helvetica, sans-serif;

    background: var(--green-color);
}

</style>