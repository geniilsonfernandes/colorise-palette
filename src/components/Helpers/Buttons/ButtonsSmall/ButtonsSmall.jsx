import React, { useState } from "react";
import styles from "./ButtonsSmall.module.css";
import Tooltip from "../../Tooltip/Tooltip";

const ButtonsSmall = ({ children, onClick, label, active, name }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <button
      className={styles.buttonsSmall}
      onClick={onClick && onClick}
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
      data-active={active}
      data-testid={name}
    >
      {children}
      {showToolTip && label && <Tooltip label={label} />}
    </button>
  );
};

export default ButtonsSmall;
