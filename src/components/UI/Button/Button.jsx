import React from "react";
import classes from "./Button.module.css";
const Button = function ({ children, ...props }) {
  return (
    <button {...props} className={classes.MyBtn}>
      {children}
    </button>
  );
};

export default Button;
