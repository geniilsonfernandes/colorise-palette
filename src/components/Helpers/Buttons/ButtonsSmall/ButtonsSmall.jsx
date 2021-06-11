import React from "react";
import styles from "./ButtonsSmall.module.css";

const ButtonsSmall = ({ children, onClick }) => {
  return (
    <div className={styles.buttonsSmall} onClick={onClick && onClick}>
      {children}
    </div>
  );
};

export default ButtonsSmall;
