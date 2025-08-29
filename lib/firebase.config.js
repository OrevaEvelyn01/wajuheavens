// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBL6eTVDzxMX9pdXuEufL7nP9ZiS2gxXs",
  authDomain: "wajuheavens-ea9a8.firebaseapp.com",
  projectId: "wajuheavens-ea9a8",
  storageBucket: "wajuheavens-ea9a8.firebasestorage.app",
  messagingSenderId: "845390800598",
  appId: "1:845390800598:web:4f67656c44c4d754064b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};