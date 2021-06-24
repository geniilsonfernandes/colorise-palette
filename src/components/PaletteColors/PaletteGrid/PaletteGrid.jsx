import React from "react";
import PaletteCard from "../PaletteCard/PaletteCard";
import styles from "./PaletteGrid.module.css";

const PaletteGrid = ({ colors }) => {
 
  return (
    <div className={styles.palette__grid}>
      {colors ? (
        colors.map((colors) => (
          <div key={colors.id} className={styles.grid__item}>
            <PaletteCard colors={colors.colors} slug={colors.slug} id={colors.id} />
          </div>
        ))
      ) : (
        <p>No colors</p>
      )}
    </div>
  );
};

export default PaletteGrid;
