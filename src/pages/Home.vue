<template>
  <HeaderComponent></HeaderComponent>
  <div class="votin-create">
    <router-link to="/new"><i class="fa-solid fa-circle-plus"></i> Criar uma nova votação</router-link>
  </div>
</template>

<script setup>

import HeaderComponent from '../components/Header.vue'

</script>

<style scoped>


.votin-create {
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  padding: 0 10px;
}

.votin-create a {
  text-decoration: none;
  font-weight: 600;
  color: var(--green-color);
}

</style>