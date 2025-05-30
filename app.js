import { db } from './firebase.js';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

const userId = 'demo-user'; // temp user
const planRef = doc(db, 'users', userId);

async function initPlan() {
  const docSnap = await getDoc(planRef);
  if (!docSnap.exists()) {
    await setDoc(planRef, { days: [] });
    console.log('Empty plan created');
  }
}

async function addWorkoutDay() {
  const newDay = {
    id: Date.now().toString(),
    name: 'New Workout Day',
    exercises: []
  };
  await updateDoc(planRef, {
    days: arrayUnion(newDay)
  });
  loadWorkoutDays();
}

async function loadWorkoutDays() {
  const docSnap = await getDoc(planRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const container = document.getElementById('workout-days');
    container.innerHTML = '';
    data.days.forEach(day => {
      const div = document.createElement('div');
      div.textContent = day.name;
      container.appendChild(div);
    });
  }
}

document.getElementById('add-day').addEventListener('click', addWorkoutDay);

initPlan().then(loadWorkoutDays);



