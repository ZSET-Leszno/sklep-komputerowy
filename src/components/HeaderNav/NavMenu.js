import { useState } from "react";

import classes from "./NavMenu.module.css";

import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import ButtonMenu from "../UI/ButtonMenu";
import NavMenuItem from "./NavMenuItem";

const NavMenu = (props) => {
  const [hideNav, setHideNav] = useState(true);

  const elements = [
    { id: 0, type: "mice" },
    { id: 1, type: "keyboard" },
    { id: 2, type: "headsets" },
    { id: 3, type: "mausepads" },
  ];

  const showHideNavHandler = () => {
    setHideNav((prevShn) => !prevShn);
  };

  const NavMenuItems = elements.map((item) => (
    <NavMenuItem key={item.id}>{item.type}</NavMenuItem>
  ));

  return (
    <nav>
      <div>
        <ButtonMenu onClick={showHideNavHandler}>
          {hideNav ? <HiOutlineMenuAlt1 /> : <HiMenu />}
        </ButtonMenu>
        {hideNav && <ul>{NavMenuItems}</ul>}
      </div>
      <h1>Smierdziel-Company</h1>
      <div>
        <AiOutlineUser />
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavMenu;
