// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbProducts = collection(db, "products");
export const dbCategories = collection(db, "categories");
export const dbWelcome = collection(db, "welcomePhrases");
export const dbCheckout = collection(db,"checkout");

// modelo de clave random usado en la colección welcomePhrases
export const randomKey = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);