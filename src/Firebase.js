import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBC_BuPV_UvpNzASyr-IqawJPnX0h-E0cE",
    authDomain: "todo-project-5f9ed.firebaseapp.com",
    projectId: "todo-project-5f9ed",
    storageBucket: "todo-project-5f9ed.appspot.com",
    messagingSenderId: "490129223473",
    appId: "1:490129223473:web:bfe828888c9cad1bb20a10",
    measurementId: "G-H0BH0Q2DG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);



