import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, label, ...props }) => {
  return (
    <button onClick={onClick} styles={styles.button} {...props}>
      {label}
    </button>
  );
};

export default Button;
