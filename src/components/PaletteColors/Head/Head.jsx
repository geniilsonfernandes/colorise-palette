import React from "react";
import Discovery from "./Discovery/Discovery";
import styles from "./Head.module.css";
import discovery from "../../../content/discovery.json";
const Head = () => {
  return (
    <div className={styles.head}>
      <h1>Colors for your creations</h1>
      <p>Endless ideas for color palettes and color combinations and fonts</p>
      <Discovery discovery={discovery} />
    </div>
  );
};

export default Head;
