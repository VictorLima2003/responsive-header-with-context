import { FaGamepad } from "react-icons/fa";
import { Button } from "./styles";

import { MainContextProvider, useMenu } from "../../context/MainContext";

const MenuButton = () => {
  const { handleToggleMenu, showMenu } = useMenu();

  const colorIcon = showMenu ? "#20b2aa" : "#ff6347";

  return (
    <Button onClick={handleToggleMenu}>
      <FaGamepad size={32} color={colorIcon} />
    </Button>
  );
};

export default MenuButton;
