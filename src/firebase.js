// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCeb8BHuFnOGJ5BXYlJ9acL1CSBxHyChEQ",
  authDomain: "studenttable-d5873.firebaseapp.com",
  projectId: "studenttable-d5873",
  storageBucket: "studenttable-d5873.appspot.com",
  messagingSenderId: "932102653150",
  appId: "1:932102653150:web:9d838ea65d7e582dd3ee4f"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export { db };
