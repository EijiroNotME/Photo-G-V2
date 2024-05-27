import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/authContext";

function useLogout() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { setCurrentUser } = useAuth();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await signOut(auth);
      setCurrentUser(null); // This will reset the user in the context
      setIsPending(false);
    } catch (error: any) {
      console.error("Error during logout:", error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};

export default useLogout;
