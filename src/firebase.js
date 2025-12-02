// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTl4q6_vY1XrbqVc4hjdf6tqjOes5LR5E",
  authDomain: "minticboot.firebaseapp.com",
  projectId: "minticboot",
  storageBucket: "minticboot.firebasestorage.app",
  messagingSenderId: "1020990046856",
  appId: "1:1020990046856:web:c9c592dfc87dd8fb23953d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
