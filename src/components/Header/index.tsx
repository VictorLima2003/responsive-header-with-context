import React from "react";
import { Container } from "./styles";

import MenuButton from "../MenuButton";

const Header = () => (
  <Container>
    <div className="wrapper">
      <strong>Play the Game</strong>
      <MenuButton />
    </div>
  </Container>
);

export default Header;
