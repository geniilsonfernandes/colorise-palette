import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/layout/Container";
import ColorHead from "./ColorHead/ColorHead";
import PaletteGrid from "../../components/PaletteColors/PaletteGrid/PaletteGrid";
import { useColors } from "../../Hook/colors";
import styles from "./SingleColor.module.css";

const SingleColor = () => {
  const { colors } = useColors();
  const { id } = useParams();
  const [color] = colors.filter((color) => color.id === +id);
  const colorFilterd = colors.filter((color) => color.id !== +id);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <ColorHead color={color} />
        </Container>
      </header>
      <Container>
        <main>
          <div className={styles.head}>Related Palettes</div>
          <PaletteGrid colors={colorFilterd} />
        </main>
      </Container>
    </>
  );
};

export default SingleColor;
