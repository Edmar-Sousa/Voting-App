<template>
    <div class="alert-message primary">

    </div>
</template>

<script setup>


</script>

<style scoped>

.alert-message {
    max-width: 300px;
    width: 100%;
    height: 40px;

    position: absolute;
    top: 20px;
    left: calc(50% - 150px) ;
}

.primary {
    border-radius: 3px;
    background: var(--green-color);
}

</style>