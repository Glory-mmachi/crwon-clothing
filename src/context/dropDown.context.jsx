import { createContext, useState } from "react";

export const DropDownContext = createContext({
  isDropped: false,
  setIsDropped: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isDropped, setIsDropped] = useState(false);
  const value = { isDropped, setIsDropped };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
