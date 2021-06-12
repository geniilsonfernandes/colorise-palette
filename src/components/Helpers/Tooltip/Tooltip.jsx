import React from "react";
import styles from "./Tooltip.module.css";
const Tooltip = ({ label }) => {
  return <div className={styles.tooltip}>{label}</div>;
};

export default Tooltip;
