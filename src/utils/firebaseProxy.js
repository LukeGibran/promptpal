import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  signOut,
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore/lite";

import { LocalStorage } from "quasar";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// connectFunctionsEmulator(functions, "localhost", 5001);

auth.onAuthStateChanged((user) => {
  if (user) LocalStorage.set("user", user);
  else LocalStorage.remove("user");
});

export {
  db,
  doc,
  auth,
  addDoc,
  setDoc,
  getDoc,
  signOut,
  getDocs,
  functions,
  collection,
  firebaseApp,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
