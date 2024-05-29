import { useState } from "react";
import { db, auth } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

function useSignUpGoogle() {
  // Errors
  const firebaseErrorMessages: { [key: string]: string } = {
    "auth/cancelled-popup-request": "Sign-in popup closed.",
    "auth/popup-closed-by-user": "Sign-in popup closed.",
  };
  const [errorGoogle, setErrorGoogle] = useState<string | null>(null);
  const [isPendingGoogle, setIsPendingGoogle] = useState<boolean>(false);
  const provider = new GoogleAuthProvider();

  const signUpGoogle = async () => {
    setErrorGoogle(null);
    setIsPendingGoogle(true);
    try {
      const res = await signInWithPopup(auth, provider);
      // Get the user ID from the response
      if (!res) {
        throw new Error("Could not complete signup");
      }

      // Get user data from Google
      const googleUser = res.user;

      // Check if the user exists in Firestore
      const userRef = doc(db, "users", googleUser.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // User does not exist, create a new user document in Firestore
        await setDoc(userRef, {
          firstName: googleUser.displayName,
          lastName: "",
          school: "",
          campus: "",
          course: "",
          email: googleUser.email,
        });
      }
      setIsPendingGoogle(false);
    } catch (error: any) {
      if (
        error.code === "auth/popup-closed-by-user" ||
        error.code === "auth/cancelled-popup-request"
      ) {
        setIsPendingGoogle(false);
        setErrorGoogle(null); // Clear the error
      } else {
        console.error("Error during Google signup:", error);
        setErrorGoogle(firebaseErrorMessages[error.code] || error.code);
        setIsPendingGoogle(false);
      }
    }
  };
  return { errorGoogle, isPendingGoogle, signUpGoogle };
}

export default useSignUpGoogle;
