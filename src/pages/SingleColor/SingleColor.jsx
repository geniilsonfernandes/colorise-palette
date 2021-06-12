import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/layout/Container";
import ColorHead from "./ColorHead/ColorHead";
import PaletteGrid from "../../components/PaletteColors/PaletteGrid/PaletteGrid";
import { useColors } from "../../Hook/colors";
import styles from "./SingleColor.module.css";
import { useScroll } from "../../Hook/useScroll";
const SingleColor = () => {
  const { colors } = useColors();

  const { id } = useParams();
  const [color] = colors.filter((color) => color.id === +id);

  const { toScroll } = useScroll(100);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <ColorHead color={color} toScroll={toScroll} />
        </Container>
      </header>
      <Container>
        <main className={styles.content}>
          <div className={styles.head}>Related Palettes</div>
          <PaletteGrid />
        </main>
      </Container>
    </>
  );
};

export default SingleColor;
