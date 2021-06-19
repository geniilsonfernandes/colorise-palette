import React from "react";
import styles from "./Head.module.css";

const Head = ({ title, subtitle }) => {
  return (
    <div className={styles.head}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Head;
