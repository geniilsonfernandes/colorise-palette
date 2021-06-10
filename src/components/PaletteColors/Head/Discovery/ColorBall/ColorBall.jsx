import React from "react";
import styles from "./ColorBall.module.css";
const ColorBall = ({ color }) => {
  return (
    <div
      className={styles.discovery__ball}
      style={{ background: `${color}` }}
    ></div>
  );
};

export default ColorBall;
