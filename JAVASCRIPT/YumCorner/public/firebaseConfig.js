// ------------------------------ firebase Configration process
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp, Timestamp,
  updateDoc,
  deleteDoc 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyC0357vGjf5qtflIWuECh2uNzxfOLLdsbs",
//   authDomain: "yumcorner-7878.firebaseapp.com",
//   projectId: "yumcorner-7878",
//   storageBucket: "yumcorner-7878.firebasestorage.app",
//   messagingSenderId: "8615793714",
//   appId: "1:8615793714:web:c86f075ff1980d8b65982b",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDY4AJ9ZQj7P4ZqcJ2Ukpop_PeFTYQvAtI",
  authDomain: "yumcorner-3767.firebaseapp.com",
  projectId: "yumcorner-3767",
  storageBucket: "yumcorner-3767.firebasestorage.app",
  messagingSenderId: "475465587272",
  appId: "1:475465587272:web:40dbc225605855a002167d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  //firebase authentication
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  //firebase firestore
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp, Timestamp,
  updateDoc,
  deleteDoc 
};
