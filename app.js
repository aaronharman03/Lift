import { db } from './firebase.js';

// Placeholder until we add Firestore logic
document.getElementById('add-day').addEventListener('click', () => {
  alert('Add workout day clicked');
});
import { collection, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

const userId = 'demo-user'; // temp user

async function initPlan() {
  const planRef = doc(db, 'users', userId);
  await setDoc(planRef, {
    days: []
  });
  console.log('Empty plan created');
}

initPlan();
import { collection, doc, updateDoc, arrayUnion, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

const userId = 'demo-user'; // temp user
const planRef = doc(db, 'users', userId);

async function addWorkoutDay() {
  // Create a new day with a unique id and default name
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

document.getElementById('add-day').addEventListener('click', addWorkoutDay);

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

// Initial load
loadWorkoutDays();


