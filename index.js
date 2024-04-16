// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmZSFbNnnMXK4YiNDfHtqXPivF_K4w3mc",
  authDomain: "testfirebase-6b269.firebaseapp.com",
  databaseURL: "https://testfirebase-6b269-default-rtdb.firebaseio.com",
  projectId: "testfirebase-6b269",
  storageBucket: "testfirebase-6b269.appspot.com",
  messagingSenderId: "169538671590",
  appId: "1:169538671590:web:15c923539b2f2f906abc27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const database = getDatabase();
const messages = ref(database, "/messages");
onValue(
  messages,
  (snapshot) => {
    //console.log(snapshot);
    const ul = document.getElementById("messages");
    snapshot.forEach((childSnapshot) => {
      const childValue = childSnapshot.val();
      const text = document.createTextNode(childValue.message);
      const li = document.createElement("li");
      li.appendChild(text);
      ul.innerHTML += `<h2>${childValue.message}</h2>`;
      ul.innerHTML += `<h2>${childValue.name}</h2>`;
    });
  },
  {
    onlyOnce: false,
  }
);
