import { useState } from "react";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

function useResetPassword() {
  // Errors
  const firebaseErrorMessages: { [key: string]: string } = {
    "auth/invalid-email": "Invalid email address.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password.",
  };
  const [errorReset, setErrorReset] = useState<string | null>(null);
  const [isPendingReset, setIsPendingReset] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const resetPassword = async (email: string) => {
    setErrorReset(null);
    setIsPendingReset(true);
    setSuccessMessage(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setIsPendingReset(false);
      setSuccessMessage("Password reset link sent! Check your email.");
    } catch (error: any) {
      console.error("Error during password reset:", error);
      setErrorReset(firebaseErrorMessages[error.code] || error.message);
      setIsPendingReset(false);
    }
  };

  return { errorReset, isPendingReset, successMessage, resetPassword };
}

export default useResetPassword;
