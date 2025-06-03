// firestore.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// YOUR FIREBASE CONFIG — replace with your actual values
const firebaseConfig = {
 apiKey: "AIzaSyBeY7gbFGHJFWlIqVuEGUoaaDTBagsJLZw",
  authDomain: "gym-app-4fff1.firebaseapp.com",
  projectId: "gym-app-4fff1",
  storageBucket: "gym-app-4fff1.firebasestorage.app",
  messagingSenderId: "1009678266608",
  appId: "1:1009678266608:web:430ec88c296133a6b39235",
  measurementId: "G-E0TDYJLMXH"
  // ...rest of your config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// We store all tasks inside one doc called 'tasksDoc' in collection 'tasks'
const tasksDocRef = doc(db, "tasks", "tasksDoc");

// Get tasks object from Firestore or return empty structure if none exists
export async function getTasks() {
  const docSnap = await getDoc(tasksDocRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };
}

// Save entire tasks object back to Firestore (overwrite)
async function saveTasks(tasks) {
  await setDoc(tasksDocRef, tasks);
}

// Add a new task to a specific day
export async function addTask(day, task) {
  const tasks = await getTasks();
  tasks[day].push(task);
  await saveTasks(tasks);
}

// Edit existing task by day and index
export async function editTask(day, index, newTask) {
  const tasks = await getTasks();
  if (tasks[day] && tasks[day][index] !== undefined) {
    tasks[day][index] = newTask;
    await saveTasks(tasks);
  }
}

// Delete a task by day and index
export async function deleteTask(day, index) {
  const tasks = await getTasks();
  if (tasks[day] && tasks[day][index] !== undefined) {
    tasks[day].splice(index, 1);
    await saveTasks(tasks);
  }
}

