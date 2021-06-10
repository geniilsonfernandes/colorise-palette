import React from "react";
import PaletteCard from "../PaletteCard/PaletteCard";
import styles from "./PaletteGrid.module.css";
import colors from "../../../content/colors.json";
import { useFavorite } from "../../../Hook/useFavorite";

const PaletteGrid = () => {
  const { toggleFavorite, isfavorite } = useFavorite();
  return (
    <div className={styles.palette__grid}>
      {colors.map((colors) => (
        <div key={colors.id} className={styles.grid__item}>
          <PaletteCard
            colors={colors.colors}
            slug={colors.slug}
            id={colors.id}
            toggleFavorite={toggleFavorite}
            isfavorite={isfavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default PaletteGrid;
