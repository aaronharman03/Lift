// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeY7gbFGHJFWlIqVuEGUoaaDTBagsJLZw",
  authDomain: "gym-app-4fff1.firebaseapp.com",
  projectId: "gym-app-4fff1",
  storageBucket: "gym-app-4fff1.firebasestorage.app",
  messagingSenderId: "1009678266608",
  appId: "1:1009678266608:web:430ec88c296133a6b39235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
