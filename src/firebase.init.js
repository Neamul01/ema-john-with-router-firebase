// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv0R5xUcsLJW1eT6EYEt2yTKR28DHjk5Y",
    authDomain: "ema-john-d5163.firebaseapp.com",
    projectId: "ema-john-d5163",
    storageBucket: "ema-john-d5163.appspot.com",
    messagingSenderId: "506287073740",
    appId: "1:506287073740:web:1028ca9f85a4ecda5e5569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;