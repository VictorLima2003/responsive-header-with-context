import GlobalStyle from "./globals/styles";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useState, createContext } from "react";

import { MainContextProvider } from "./context/MainContext";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <MainContextProvider>
      <GlobalStyle />
      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
