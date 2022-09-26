import { useState } from "react";
import { createContext, useEffect } from "react";
import {
  onAuthStateChangedListener,
  craeteUserDocumentFRomAuth,
} from "../utils/firebase.utils";
//actual value u want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        craeteUserDocumentFRomAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
