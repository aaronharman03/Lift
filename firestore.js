// Your Firebase config — replace with your own config from Firebase Console
const firebaseConfig = {
 apiKey: "AIzaSyBeY7gbFGHJFWlIqVuEGUoaaDTBagsJLZw",
  authDomain: "gym-app-4fff1.firebaseapp.com",
  databaseURL: "https://gym-app-4fff1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gym-app-4fff1",
  storageBucket: "gym-app-4fff1.firebasestorage.app",
  messagingSenderId: "1009678266608",
  appId: "1:1009678266608:web:430ec88c296133a6b39235",
  measurementId: "G-E0TDYJLMXH"
};

// Initialize Firebase and Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
