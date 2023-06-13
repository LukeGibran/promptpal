import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCjwOdJHHduO4pdAQKtdur2ABFSWizC9K4",
  authDomain: "promptme-7b9d8.firebaseapp.com",
  projectId: "promptme-7b9d8",
  storageBucket: "promptme-7b9d8.appspot.com",
  messagingSenderId: "100664264545",
  appId: "1:100664264545:web:4a3e6022cdde2fbb1ea720",
  measurementId: "G-GRB47HM4BQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp);
const db = getFirestore(firebaseApp);
// connectFunctionsEmulator(functions, "localhost", 5001);

export { functions, firebaseApp, db, collection, getDocs, addDoc };
