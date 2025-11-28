// Importa los módulos principales de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension"; // para autenticación
import { getFirestore } from "firebase/firestore"; // para base de datos Firestore

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCTl4q6_vY1XrbqVc4hjdf6tqjOes5LR5E",
  authDomain: "minticboot.firebaseapp.com",
  projectId: "minticboot",
  storageBucket: "minticboot.firebasestorage.app",
  messagingSenderId: "1020990046856",
  appId: "1:1020990046856:web:c9c592dfc87dd8fb23953d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta instancias listas para usar
export const auth = getAuth(app); // autenticación
export const db = getFirestore(app); // base de datos