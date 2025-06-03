// firestore.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// Your Firebase config object here
const firebaseConfig = {
  apiKey: "AIza...YOUR_API_KEY...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "your-app-id"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, doc, getDoc, setDoc };
