import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBZjpJS_Avem6-QO_zURmsc0SXwXcZZN0A",
    authDomain: "my-portfolio-testing.firebaseapp.com",
    projectId: "my-portfolio-testing",
    storageBucket: "my-portfolio-testing.appspot.com",
    messagingSenderId: "588420950513",
    appId: "1:588420950513:web:8ea3d63ca334f92ae4fc50",
    measurementId: "G-G6M356CRGB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth,provider);