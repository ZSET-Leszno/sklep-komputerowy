import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <input type={props.type || "text"} {...props} className={classes.input} />
  );
}

export default Input;
