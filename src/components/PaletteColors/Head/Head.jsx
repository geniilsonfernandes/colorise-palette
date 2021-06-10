import React from "react";
import Discovery from "./Discovery/Discovery";
import styles from "./Head.module.css";
import discovery from "../../../content/discovery.json";
const Head = () => {
  return (
    <div className={styles.head}>
      <h1>Trending color palettes</h1>
      <p>
        For endless color palette ideas, visit our color combinations resource
      </p>
      <Discovery discovery={discovery} />
    </div>
  );
};

export default Head;
