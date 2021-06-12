import React, { useState } from "react";
import styles from "./ButtonsSmall.module.css";
import Tooltip from "../../Tooltip/Tooltip";

const ButtonsSmall = ({ children, onClick, label }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <button
      className={styles.buttonsSmall}
      onClick={onClick && onClick}
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
      role={label}
    >
      {children}
      {showToolTip && label && <Tooltip label={label} />}
    </button>
  );
};

export default ButtonsSmall;
