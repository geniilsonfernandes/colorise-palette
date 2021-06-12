import React, { useEffect, useRef, useState } from "react";
import styles from "./ColorCard.module.css";

const ColorCard = ({ color }) => {
  const [colorCode, setColorCode] = useState(color);
  const [copied, setCopied] = useState(false);
  const colorCodeText = useRef("");

  function copyColorCode() {
    setCopied(true);
    const input = colorCodeText.current;
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  useEffect(() => {
    copied ? setColorCode("Copied!") : setColorCode(color);
  }, [copied, color]);

  return (
    <div
      className={styles.color__bar}
      style={{ background: `#${color}` }}
      onClick={() => copyColorCode()}
      onMouseLeave={() => setCopied(false)}
    >
      <div className={styles.copy}>{colorCode}</div>
      <input
        type="text"
        className={styles.clipboard}
        value={color}
        ref={colorCodeText}
        onChange={(target) => (target.value = color)}
        readOnly
        tabIndex="-1"
      />
    </div>
  );
};

export default ColorCard;
