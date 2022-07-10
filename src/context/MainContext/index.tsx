import React, { useContext } from "react";
import { createContext, useState } from "react";

type MainContextData = {
  showMenu: boolean;
  handleToggleMenu: () => void;
};
type MainContextProvider = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProvider) => {
  const [showMenu, setShowMenu] = useState(false);
  function handleToggleMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <MainContext.Provider
      value={{
        handleToggleMenu,
        showMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);
