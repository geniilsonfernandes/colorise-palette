import React, { useEffect, useState } from "react";
import styles from "./CardColorBar.module.css";
import { copyToClipboard } from "../../../../utilities/copyToClipboard";

const CardColorBar = ({ color }) => {
  const [colorCode, setColorCode] = useState(color);
  const [showColor, setShowColor] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleClick(value) {
    setCopied(true);
    copyToClipboard(value);
  }

  function onMouseLeave() {
    setCopied(false);
    setShowColor(false);
  }

  useEffect(() => {
    copied ? setColorCode("Copied!") : setColorCode(color);
  }, [copied, color]);

  return (
    <div
      className={styles.color__bar}
      style={{ background: `#${color}` }}
      onClick={() => handleClick(color)}
      onMouseOver={() => setShowColor(true)}
      onMouseLeave={() => onMouseLeave()}
      title={color}
    >
      {showColor && <div className={styles.copy}>{colorCode}</div>}
    </div>
  );
};

export default CardColorBar;
