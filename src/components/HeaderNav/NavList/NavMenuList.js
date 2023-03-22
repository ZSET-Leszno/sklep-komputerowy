import classes from "./NavMenuList.module.css";

import NavMenuItem from "./NavMenuItem";

const NavMenuList = (props) => {
  const NavMenuItems = props.elements.map((item) => (
    <NavMenuItem key={item.id}>{item.type}</NavMenuItem>
  ));
  return <ul className={classes.ul}>{NavMenuItems}</ul>;
};

export default NavMenuList;
