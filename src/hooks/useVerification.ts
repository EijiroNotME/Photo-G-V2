import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { AuthContextType } from "../types/users";
import { sendEmailVerification } from "firebase/auth";

function useVerify() {
  const [errorVerify, setErrorVerify] = useState<string | null>(null);
  const [isPendingVerify, setIsPendingVerify] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const { currentUser } = useAuth() as AuthContextType;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const verify = async () => {
    setErrorVerify(null);
    setIsPendingVerify(true);
    try {
      if (currentUser) {
        await sendEmailVerification(currentUser);
        setIsPendingVerify(false);
        setTimer(60);
      }
    } catch (error: any) {
      console.error("Error during verification:", error);
      setErrorVerify(error.message);
      setIsPendingVerify(false);
    }
  };

  return { verify, errorVerify, isPendingVerify, timer };
}

export default useVerify;
