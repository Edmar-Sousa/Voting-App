<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <div class="votin-create">
      <router-link to="/new"><i class="fa-solid fa-circle-plus"></i> Criar uma nova votação</router-link>
    </div>

    <h2>Votações criadas:</h2>
    <VoitingComponent />
  </div>

</template>

<script setup>

import HeaderComponent from '../components/Header.vue'
import VoitingComponent from '../components/Voitings.vue'

</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;

  padding: 20px;
}

.votin-create {
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
}

.votin-create a {
  text-decoration: none;
  font-weight: 600;
  color: var(--green-color);
}

h2 {
  font-size: 2rem;
}

</style>