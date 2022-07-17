import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFciE7URwMXLW9Z_eZ0rAhANyHpAOwJ3E",
  authDomain: "noon-3e078.firebaseapp.com",
  projectId: "noon-3e078",
  storageBucket: "noon-3e078.appspot.com",
  messagingSenderId: "884703040907",
  appId: "1:884703040907:web:5f4f64f2de4b1f44ba4b8e",
  measurementId: "G-ECSF5CVY6B",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
