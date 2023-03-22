import classes from "./NavMenuItem.module.css";

const NavMenuItem = (props) => {
  return (
    <li className={classes["nav-item"]}>
      <a href="#">{props.children}</a>
    </li>
  );
};

export default NavMenuItem;
