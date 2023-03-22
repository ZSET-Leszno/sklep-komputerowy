import classes from "./ButtonMenu.module.css";

const ButtonMenu = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};

export default ButtonMenu;
