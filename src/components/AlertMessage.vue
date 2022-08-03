<template>
    <div class="alert-message" 
        :class="{ 
            'enter-alert' : alertMessageRef != null && alertMessageRef.length != 0, 
            'leave-alert' : alertMessageRef != null && alertMessageRef.length == 0, 
            'primary' : alertTypeRef, 
            'danger'  : !alertTypeRef 
        }">

            <span class="icon-container">
                <i class="fa-solid fa-circle-exclamation"></i>
            </span>

            <p>{{ alertMessageRef }}</p>
    </div>
</template>

<script setup>

import { alertMessageRef, alertTypeRef } from '../utils/alertBus'



</script>

<style scoped>

.alert-message {
    max-width: 300px;
    width: 100%;
    height: 40px;

    position: fixed;
    top: -100%;
    left: calc(50% - 150px) ;

    padding: 0 5px;

    display: flex;
    align-items: center;

}


.enter-alert {
    animation: alert-enter 2s forwards;
}

.leave-alert {
    animation: alert-leave 2s forwards;
}

.alert-message p {
    margin-left: 5px;
}

.primary {
    border-radius: 3px;
    background: var(--green-color);
}

.danger {
    border-radius: 3px;
    background: var(--red-color);
}

.icon-container {
    font-size: 20px;
}


@keyframes alert-enter {
    100% {
        top: 20px;
    }
}

@keyframes alert-leave {
    0% {
        top: 20px;
    }

    100% {
        top: -100%;
    }
}


</style>