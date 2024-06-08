// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-edfcf.firebaseapp.com",
  projectId: "mern-blog-edfcf",
  storageBucket: "mern-blog-edfcf.appspot.com",
  messagingSenderId: "429979213831",
  appId: "1:429979213831:web:5f18556a6597ee00054aa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);