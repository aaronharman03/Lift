// Firebase v9+ modular import
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBeY7gbFGHJFWlIqVuEGUoaaDTBagsJLZw",
  authDomain: "gym-app-4fff1.firebaseapp.com",
  projectId: "gym-app-4fff1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

