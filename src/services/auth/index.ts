import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import firebaseApp from '../firebase'

export async function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    const auth = getAuth(firebaseApp)

    try {
        await signInWithPopup(auth, provider)
        const userAuth = auth.currentUser?.displayName
        const userUid  = auth.currentUser?.uid

        if (userAuth && userAuth !== '' && userUid) {
            window.localStorage.setItem('auth', userAuth)
            window.localStorage.setItem('uid',  userUid)
            return true
        }

        return false
    }

    catch (e) {
        return false
    }
}
