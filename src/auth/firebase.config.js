// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxj7zYdxA_uv_-63a4ymY9P87Xjju9k6g",
    authDomain: "exclusive-ed464.firebaseapp.com",
    projectId: "exclusive-ed464",
    storageBucket: "exclusive-ed464.appspot.com",
    messagingSenderId: "158441395576",
    appId: "1:158441395576:web:a6f36849e9dc067048248d",
    measurementId: "G-SEERHBFBE2"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;