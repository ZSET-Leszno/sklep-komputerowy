import classes from "./ButtonMenu.module.css";

const ButtonMenu = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonMenu;
