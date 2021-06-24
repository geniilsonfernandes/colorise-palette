import React from "react";
import PaletteColors from "../../components/PaletteColors/PaletteColors";
import { useColors } from "../../Hook/colors";

const Home = () => {
  const { colors } = useColors();
  return (
    <>
      <PaletteColors  colors={colors}/>
    </>
  );
};

export default Home;
