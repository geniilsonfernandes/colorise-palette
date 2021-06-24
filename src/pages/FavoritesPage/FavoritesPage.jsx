import React, { useEffect, useState } from "react";
import { useColors } from "../../Hook/colors";
import styles from "./FavoritesPage.module.css";
import Container from "./../../components/layout/Container";
import PaletteGrid from "./../../components/PaletteColors/PaletteGrid/PaletteGrid";
const FavoritesPage = () => {
  const { favoritesColors } = useColors();
  const [totalColors, setTotalColors] = useState(0);

  useEffect(() => {
    setTotalColors(favoritesColors.length);
  }, [favoritesColors]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.head}>You Saved {totalColors} Palettes</div>
          <main className={styles.grid}>
            <PaletteGrid colors={favoritesColors} />
          </main>
        </Container>
      </header>
    </>
  );
};

export default FavoritesPage;
