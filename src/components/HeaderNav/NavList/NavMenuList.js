import classes from "./NavMenuList.module.css";

import { AiOutlineUser } from "react-icons/ai";
import NavMenuItem from "./NavMenuItem";

const NavMenuList = (props) => {
  const NavMenuItems = props.elements.map((item) => (
    <NavMenuItem key={item.id}>{item.type}</NavMenuItem>
  ));
  return (
    <ul className={classes.ul}>
      {NavMenuItems}
      <NavMenuItem>
        Profil <AiOutlineUser />
      </NavMenuItem>
    </ul>
  );
};

export default NavMenuList;
