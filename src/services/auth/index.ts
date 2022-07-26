import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import firebaseApp from '../firebase'

export async function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    const auth = getAuth(firebaseApp)

    try {
        await signInWithPopup(auth, provider)
        const userAuth = auth.currentUser?.displayName

        if (userAuth && userAuth !== '') {
            window.localStorage.setItem('auth', userAuth)
            return true
        }

        return false
    }

    catch (e) {
        return false
    }
}
