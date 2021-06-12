import React from "react";
import styles from "./layout.module.css";

const ContainerFluid = ({ children,className }) => {


  
  return <div className={`${styles.containerFluid} ${className}`} >{children}</div>;
};

export default ContainerFluid;
