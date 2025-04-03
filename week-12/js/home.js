import { app } from "./app.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const HADCollection = collection(db, "hopesandreams");

const HADRef = document.querySelector("#dreams");
const newHADRef = document.querySelector("#newHAD");
const dreamTextRef = document.querySelector("#dreamText");

async function getHAD() {
  const HADdocs = await getDocs(HADCollection);
  console.log(HADdocs.docs.length);

  HADRef.innerHTML = "";

  for (let index = 0; index < HADdocs.docs.length; index++) {
    const currentHAD = HADdocs.docs[index];
    console.log(currentHAD.id, currentHAD.data());

    const HADData = currentHAD.data();
    HADRef.innerHTML += "<li>" + HADData.text + "</li>";
  }
}

async function addNewDream(e) {
  e.preventDefault();

  const dreamTextValue = dreamTextRef.value;
  const newDream = await addDoc(HADCollection, { text: dreamTextValue });

  console.log(newDream);

  getHAD();

  newHADRef.reset();
}

newHADRef.onsubmit = addNewDream;

getHAD();

console.log("home", app);
