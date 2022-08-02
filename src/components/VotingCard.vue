<template>
    <div class="voting">
        <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>

        <ul>
            <li><i class="fa-solid fa-trophy"></i> Gol</li>
            <li><i class="fa-solid fa-user"></i> 100</li>
            <li><i class="fa-solid fa-lock"></i> Votação encerrada</li> <!-- <i class="fa-solid fa-lock-open"></i> -->
        </ul>

        <div class="options-voting">
            <button class="button">
                <i class="fa-solid fa-trash"></i>
            </button>

            <button class="button">
                <i class="fa-solid fa-lock-open"></i>
            </button>

            <button class="button">
                <i class="fa-solid fa-copy"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.voting {
    width: 100%;
    height: 100%;
    padding: 20px 10px;

    border-radius: 5px;

    background: var(--green-bg-color);
}

.voting h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.voting ul {
    list-style: none;
}

.voting ul li {
    font-weight: 600;
}

.options-voting {
    width: 100%;
    padding-top: 10px;
}

.button {
    width: 25px;
    height: 25px;

    font-size: 15px;

    background: none;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
}

.button:nth-child(1) {
    margin-left: 0;
    background: var(--red-color);
}

.button:nth-child(2) {
    background: var(--blue-color);
}

.button:nth-child(3) {
    background: var(--yellow-color);
}

</style>