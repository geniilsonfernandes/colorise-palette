import React, { useState } from "react";
import styles from "./SearchInput.module.css";
import { LoupeIcon } from "../../icons/Icons";


const SearchInput = ({ placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <span className={styles.icon}>
        <LoupeIcon />
      </span>
    </div>
  );
};

export default SearchInput;
