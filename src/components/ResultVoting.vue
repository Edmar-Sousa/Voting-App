<template>
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
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps(['options', 'person'])

const optionsArray = computed(() => { 
    return Object.keys(props.options).map(option => ({ option, value: props.options[option] }) )
})

function convertPercent(value: string) {
    return Number((Number(value) * 100) / (props.person == 0 ? 1 : props.person)).toFixed(2)
}

</script>

<style scoped>

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