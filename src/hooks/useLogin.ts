import { useState } from "react";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Timestamp, doc, serverTimestamp, updateDoc } from "@firebase/firestore";

function useLogin() {
  // Errors
  const firebaseErrorMessages: { [key: string]: string } = {
    "auth/invalid-email": "Invalid email address.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password.",
  };
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const login = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // Get the user ID from the response
      if (!res) {
        throw new Error("Could not complete signin");
      }
      const userId = res.user.uid;
      await updateDoc(doc(db, 'users', userId), {
        lastLogin: serverTimestamp() as Timestamp
      });
      
      setIsPending(false);
    } catch (error: any) {
      console.error("Error during signin:", error);
      setError(firebaseErrorMessages[error.code] || error.code);
      setIsPending(false);
    }
  };
  return { error, isPending, login };
}

export default useLogin;
