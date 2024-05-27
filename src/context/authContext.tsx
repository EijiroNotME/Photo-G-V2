import { useEffect, useState, createContext, ReactNode, useContext } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";


// Define the context type
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const contextValue: AuthContextType = {
    currentUser,
    loading,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
