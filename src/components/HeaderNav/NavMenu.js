import { useState } from "react";

import classes from "./NavMenu.module.css";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import ButtonMenu from "../UI/ButtonMenu";
import NavMenuList from "./NavList/NavMenuList";

const NavMenu = (props) => {
  const [hideNav, setHideNav] = useState(true);

  const elements = [
    { id: 0, type: "Mice" },
    { id: 1, type: "Keyboard" },
    { id: 2, type: "Headsets" },
    { id: 3, type: "Mausepads" },
  ];

  const showHideNavHandler = () => {
    setHideNav((prevShn) => !prevShn);
  };

  return (
    <nav className={classes.nav}>
      <ButtonMenu onClick={showHideNavHandler}>
        {hideNav ? <HiOutlineMenuAlt1 /> : <HiMenu />}
      </ButtonMenu>
      {hideNav && <NavMenuList elements={elements} />}

      <h1>Smierdziel-Company</h1>

      <ButtonMenu>
        <AiOutlineShoppingCart />
      </ButtonMenu>
    </nav>
  );
};

export default NavMenu;
