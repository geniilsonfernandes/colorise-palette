import React, { createContext, useEffect, useState } from "react";
import colors from "../../content/colors.json";
import discovery from "../../content/discovery.json";
import { filterCompared } from "../filterCompared";
import useFavorite from "../useFavorite";

export const ColorsContext = createContext();
export const ColorsProvider = ({ children }) => {
  const { colorsFavoritesId, toggleFavorite, isFavorite } = useFavorite();
  const [favoritesColors, setFavoritesColors] = useState([]);


  useEffect(() => {
    setFavoritesColors(filterCompared(colors, colorsFavoritesId));
  }, [colorsFavoritesId]);


  return (
    <ColorsContext.Provider
      value={{
        colors,
        discovery,
        colorsFavoritesId,
        toggleFavorite,
        isFavorite,
        favoritesColors,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
};
