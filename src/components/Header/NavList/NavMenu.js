import { useState } from "react";

import classes from "./NavMenu.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import ButtonMenu from "../../UI/ButtonMenu";
import NavMenuList from "./NavMenuList";

const NavMenu = (props) => {
  const [hideNav, setHideNav] = useState(true);

  const showHideNavHandler = () => {
    setHideNav((prevShn) => !prevShn);
  };

  return (
    <nav className={classes.nav}>
      <ButtonMenu onClick={showHideNavHandler}>
        {!hideNav ? <HiOutlineMenuAlt1 /> : <HiMenu />}
      </ButtonMenu>
      {!hideNav && <NavMenuList />}

      <h1>Smierdziel-Company</h1>

      <ButtonMenu>
        <AiOutlineShoppingCart />
      </ButtonMenu>
    </nav>
  );
};

export default NavMenu;
