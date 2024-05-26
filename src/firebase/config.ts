import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWacSXkpjQg8j3TkWJd3IVDTYPFUtm2c",
  authDomain: "codepix-1ae1a.firebaseapp.com",
  projectId: "codepix-1ae1a",
  storageBucket: "codepix-1ae1a.appspot.com",
  messagingSenderId: "385688807222",
  appId: "1:385688807222:web:569abba5b318a211ebb597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectAuth = getAuth();

export {db, projectAuth };