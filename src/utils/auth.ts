export function isUserAuthenticated() {
    const userName = window.localStorage.getItem('auth')

    if (userName != undefined && userName !== '')
        return true

    return false
}