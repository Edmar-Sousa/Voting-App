<template>
    <div class="app">
        <AlertMessage />
        <Login />
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
  --black-color: rgb(0, 0, 0);
  --green-color: rgb(9, 200, 4);
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
