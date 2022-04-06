// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3jBRJosWoys2TttjmvFeDb2GXMUAEVsM",
  authDomain: "money-bird-39e83.firebaseapp.com",
  projectId: "money-bird-39e83",
  storageBucket: "money-bird-39e83.appspot.com",
  messagingSenderId: "709253797214",
  appId: "1:709253797214:web:9fb53e10a1171b6603ebcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db, auth};