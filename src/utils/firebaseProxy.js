import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE.PROJECT_ID,
  storageBucket: process.env.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp);
const db = getFirestore(firebaseApp);
// connectFunctionsEmulator(functions, "localhost", 5001);

export { functions, firebaseApp, db, collection, getDocs, addDoc };
