import { useState } from "react";
import { db, auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { UserData } from "../types/users";

function useSignup() {
  // Errors
  const firebaseErrorMessages: { [key: string]: string } = {
    "auth/email-already-in-use": "Email already in use.",
    "auth/invalid-email": "Invalid email address.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/weak-password": "Weak password.",
  };
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const signup = async (
    email: string,
    password: string,
    displayName: string,
    school: string,
    campus: string,
    course: string
  ) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Get the user ID from the response
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const userId = res.user.uid;

      const userData: UserData = {
        displayName,
        photoURL: "",
        school,
        campus,
        course,
        email,
        created: serverTimestamp() as Timestamp,
        lastLogin: serverTimestamp() as Timestamp,
      };

      // Set user document in Firestore
      await setDoc(doc(db, 'users', userId), userData);
      
      setIsPending(false);
    } catch (error: any) {
      console.error("Error during signup:", error);
      setError(firebaseErrorMessages[error.code] || error.code);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
}

export default useSignup;
