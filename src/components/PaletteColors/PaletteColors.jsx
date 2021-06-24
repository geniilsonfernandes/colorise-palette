import React from "react";
import Container from "../layout/Container";
import Head from "./Head/Head";
import PaletteGrid from "./PaletteGrid/PaletteGrid";


const PaletteColors = ({colors}) => {
  return (
    <Container>
      <Head
        title="Colors for your creations"
        subtitle="Endless ideas for color palettes and color combinations and fonts"
      />
      <PaletteGrid colors={colors} />
    </Container>
  );
};

export default PaletteColors;
