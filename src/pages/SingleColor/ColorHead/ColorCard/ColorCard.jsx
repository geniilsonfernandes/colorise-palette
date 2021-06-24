import React, { useEffect, useState } from "react";
import { copyToClipboard } from "../../../../utilities/copyToClipboard";
import { hexToRgb } from "../../../../utilities/hexToRgb";
import styles from "./ColorCard.module.css";

const ColorCard = ({ color }) => {
  const [colorCode, setColorCode] = useState(color);
  const [copied, setCopied] = useState(false);

  function handleClick(value) {
    setCopied(true);
    copyToClipboard(value);
  }

  useEffect(() => {
    copied ? setColorCode("Copied!") : setColorCode(color);
  }, [copied, color]);

  return (
    <>
      <div
        className={styles.color__bar}
        style={{ background: `#${color}` }}
        onClick={() => handleClick(color)}
        onMouseLeave={() => setCopied(false)}
      >
        <div className={styles.copy}>{colorCode}</div>
      </div>
      <div className={styles.description}>
        <span className={styles.hex}>{`#${color}`}</span>
        <span className={styles.rgb}>{`${hexToRgb(color)}`}</span>
      </div>
    </>
  );
};

export default ColorCard;
