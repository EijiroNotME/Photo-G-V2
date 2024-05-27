import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuCjaW00ibu-GdLDv6cvfaRwaL68cFK4E",
  authDomain: "codepix-d364d.firebaseapp.com",
  projectId: "codepix-d364d",
  storageBucket: "codepix-d364d.appspot.com",
  messagingSenderId: "236039575059",
  appId: "1:236039575059:web:52a1d45f6991496e5a11e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db, auth };