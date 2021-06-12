import React from "react";
import styles from "./PaletteCard.module.css";
import ColorBar from "./ColorBar/ColorBar";
import ColorMenu from "./ColorMenu/ColorMenu";

const PaletteCard = (props) => {
  const { colors, slug, id } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__colors}>
        {colors.map((color) => (
          <ColorBar key={color} color={color} />
        ))}
      </div>
      <ColorMenu colors={colors} slug={slug} id={id} {...props} />
    </div>
  );
};

export default PaletteCard;
