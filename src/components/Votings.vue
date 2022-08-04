<template>
    <div class="voting-container" v-if="voting.length > 0">
        <component 
            v-for="(votingObj, i) in voting" 
            :key="i" 
            :is="VotingCard" 
            :voting="votingObj" />
    </div>

    <Warning>
        Nenhuma votação encontrada!
    </Warning>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import VotingCard from './VotingCard.vue'
import Warning from './Warning.vue'

import { getVotings } from '../utils/database'

const voting = ref(Array<Object>())

onMounted(() => {
    const userUid = window.localStorage.getItem('uid') as string
    
    getVotings(userUid, (data : any) => { 
        voting.value = []
        
        Object.keys(data).map(key => {
            voting.value.push({ id: key, ...data[key] })
        })

    })
})

</script>

<style scoped>

.voting-container {
    width: 100%;

    padding: 10px 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 340px));
    gap: 20px;
}


</style>