import React from "react";
import PaletteCard from "../PaletteCard/PaletteCard";
import styles from "./PaletteGrid.module.css";
import { useColors } from "../../../Hook/colors";

const PaletteGrid = () => {
  const { colors } = useColors();

  return (
    <div className={styles.palette__grid}>
      {colors.map((colors) => (
        <div key={colors.id} className={styles.grid__item}>
          <PaletteCard
            colors={colors.colors}
            slug={colors.slug}
            id={colors.id}
          />
        </div>
      ))}
    </div>
  );
};

export default PaletteGrid;
