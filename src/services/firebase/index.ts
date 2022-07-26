import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyAmBQ7ijasGVaLhZ0mu4aWO3ZIGhM70FfE",
    authDomain: "voting-app-48e87.firebaseapp.com",
    projectId: "voting-app-48e87",
    storageBucket: "voting-app-48e87.appspot.com",
    messagingSenderId: "855882360930",
    appId: "1:855882360930:web:461465789455536fae493b"
};

const app = initializeApp(firebaseConfig)

export default app
