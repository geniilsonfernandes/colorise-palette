import React, { useState } from "react";
import styles from "./ButtonsMedium.module.css";
import Tooltip from "../../Tooltip/Tooltip";

const ButtonsMedium = ({ children, onClick, label }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <button
      className={styles.buttonsSmall}
      onClick={onClick && onClick}
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {children}
      {showToolTip && label && <Tooltip label={label} />}
    </button>
  );
};

export default ButtonsMedium;
