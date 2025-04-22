import { app } from "./app.js";

import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesandreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
  const dreamDocs = await getDocs(dreamsCollection);

  dreamsRef.innerHTML = "";

  for (let index = 0; index < dreamDocs.docs.length; index++) {
    const currentDream = dreamDocs.docs[index];

    const data = currentDream.data();

    const hearts = data.hearts || 0;

    dreamsRef.innerHTML += `<div class="dream">
        <h4>
        <span class="delete" data-id="${currentDream.id}">&otimes;</span>
        ${data.text}
        </h4>
        <p>Likes: ${hearts}</p>
        <p>
          <button class="edit">Edit</button>
          <button class="heart" data-id="${currentDream.id}" data-hearts="${hearts}" >&hearts;</button>
        </p>
      </div>`;
  }

  const heartsRef = document.querySelectorAll(".heart");

  for (let index = 0; index < heartsRef.length; index++) {
    heartsRef[index].onclick = addHeart;
  }

  const otimesRef = document.querySelector(".delete");

  for (let index = 0; index < otimesRef.length; index++) {
    otimesRef[i].onclick = forgetDream;
  }
}

async function addHeart(e) {
  console.log("Add Heart", e.target.dataset.id);

  const newHeartCount = Number(e.target.dataset.id) + 1;

  const dreamToUpdate = doc(dreamsCollection, e.target.dataset.id);

  await updateDoc(dreamToUpdate, { hearts: newHeartCount });

  getDreams();
}

async function forgetDream(e) {
  console.log("Dream to forget", data);

  const userConfirmed = confirm("Do you want to forget this dream?");

  if (userConfirmed) {
    const dreamToDelete = doc(dreamsCollection, e.target.dataset.id);

    await deleteDoc(dreamToDelete);

    getDreams();
  }
}

getDreams();
