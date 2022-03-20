// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWeGjqbawwuLad9lp7ndbOKP9YRH_xk3M",
  authDomain: "quoraclone-93a91.firebaseapp.com",
  projectId: "quoraclone-93a91",
  storageBucket: "quoraclone-93a91.appspot.com",
  messagingSenderId: "1022379726431",
  appId: "1:1022379726431:web:66c0d58adda65ac70b2dea",
  measurementId: "G-CJ9B7M47VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
