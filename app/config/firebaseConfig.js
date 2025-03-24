import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVGBcDTBIyXgTMqedBM0GcjQnyNZ7_rm0",
  authDomain: "wordle-julkar.firebaseapp.com",
  projectId: "wordle-julkar",
  storageBucket: "wordle-julkar.firebasestorage.app",
  messagingSenderId: "575381814433",
  appId: "1:575381814433:web:d335113615a95d7b1f44e0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

