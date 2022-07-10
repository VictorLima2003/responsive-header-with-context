import { useMenu } from "../../context/MainContext";
import { NavMenu } from "./styles";

const Menu = () => {
  const { showMenu } = useMenu();

  return (
    <NavMenu showMenu={showMenu}>
      <ul>
        <li>PlayStation</li>
        <li>Xbox</li>
        <li>Nintendo Switch</li>
        <li>PC</li>
      </ul>
    </NavMenu>
  );
};

export default Menu;
