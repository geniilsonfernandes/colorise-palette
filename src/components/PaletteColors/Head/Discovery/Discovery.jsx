import React from "react";
import ColorBall from "./ColorBall/ColorBall";
import styles from "./Discovery.module.css";
const Discovery = ({ discovery }) => {
  return (
    <div className={styles.discovery}>
      {discovery.map((color) => (
        <ColorBall key={color.color} color={color.color} />
      ))}
    </div>
  );
};

export default Discovery;
