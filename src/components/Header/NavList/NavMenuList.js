import classes from "./NavMenuList.module.css";
import category from "../../../asset/category.json";

import { AiOutlineUser } from "react-icons/ai";
import NavMenuItem from "./NavMenuItem";

const NavMenuList = () => {
  const elements = category.category;
  const NavMenuItems = elements.map((item) => (
    <NavMenuItem key={item.id}>{item.name}</NavMenuItem>
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
