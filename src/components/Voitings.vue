<template>
    <div class="voting-container">
        <VotingCard />
        <VotingCard />
        <VotingCard />
        <VotingCard />
        <VotingCard />
        <VotingCard />
    </div>
</template>

<script setup lang="ts">

import VotingCard from './VotingCard.vue'

</script>

<style scoped>

.voting-container {
    width: 100%;

    padding: 10px 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}


</style>