import React from "react";
import Container from "../layout/Container";
import Head from "./Head/Head";
import PaletteGrid from "./PaletteGrid/PaletteGrid";

const PaletteColors = () => {
  return (
    <Container>
      <Head />
      <PaletteGrid />
    </Container>
  );
};

export default PaletteColors;
