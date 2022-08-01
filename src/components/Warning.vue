<template>
    <p class="warning-message">
        <i class="fa-solid fa-circle-exclamation"></i> <slot></slot>
    </p>
</template>

<script setup lang="ts">


</script>

<style scoped>

.warning-message {
    width: 100%;
    margin: 10px 0;

    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--yellow-border);

    background: var(--yellow-color);
}

</style>