<template>
    <div class="app">
      <AlertMessage />
      <router-view />
    </div>
</template>

<script setup>

import AlertMessage from './components/AlertMessage.vue'
import Login from './pages/Login.vue'

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root, html {
  font-size: 62.5%;

  --white-color: rgb(243, 243, 243);
  --text-white-color: #fff;
  --black-color: rgb(0, 0, 0);
  --text-gray-color: rgb(66, 66, 66);
  --green-color: rgb(9, 200, 4);
  --green-bg-color: rgb(122, 230, 118);
  --red-color: rgb(214, 8, 8);
  --blue-color: rgb(70, 98, 221);
  --yellow-color: rgb(247, 214, 70);
  --yellow-border: rgb(196, 167, 39);
}

body {
  font-size: 1.6rem;
}

.app {
    width: 100vw;
    height: 100vh;

    font-family: Roboto, Arial, Helvetica, sans-serif;

    background: var(--white-color);
}


</style>
