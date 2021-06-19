import React from "react";
import styles from "./PaletteCard.module.css";
import CardColorBar from "./CardColorBar/CardColorBar";
import CardDescription from "./CardDescription/CardDescription";

const PaletteCard = (props) => {
  const { colors, slug, id } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__colors}>
        {colors.map((color) => (
          <CardColorBar key={color} color={color} />
        ))}
      </div>
      <CardDescription colors={colors} slug={slug} id={id} {...props} />
    </div>
  );
};

export default PaletteCard;
