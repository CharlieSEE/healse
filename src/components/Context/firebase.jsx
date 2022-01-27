import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext({ user: null, error: null });

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {

//   }
// });
