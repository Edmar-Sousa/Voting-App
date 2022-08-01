import { ref } from 'vue'


export const alertMessageRef = ref<null | string>(null)
export const alertTypeRef    = ref<null | boolean>(null)


export function onShowAlert(alertMessage : string, alertType : 'primary' | 'danger') : void {
    alertMessageRef.value = alertMessage
    alertTypeRef.value    = alertType === 'primary'

    setTimeout(() => {
        alertMessageRef.value = ''
    }, 3000)
}
