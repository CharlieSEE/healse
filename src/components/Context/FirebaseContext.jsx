import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser);
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
