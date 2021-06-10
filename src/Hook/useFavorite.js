import { useEffect, useState } from "react";

export const useFavorite = () => {
  const [colorsFavorites, setColorsFavorite] = useState([]);

  useEffect(() => {
    const persistedColorsFavorite = localStorage.getItem("colorsFavorites");
    const colorsFavorites = JSON.parse(persistedColorsFavorite);
    setColorsFavorite(colorsFavorites || []);
  }, []);

  useEffect(() => {
    const StringifiedColorsFavorite = JSON.stringify(colorsFavorites);
    localStorage.setItem("colorsFavorites", StringifiedColorsFavorite);
  }, [colorsFavorites]);

  function toggleFavorite(id) {
    if (checkFavorite(id) === id) {
      const filtered = colorsFavorites.filter((color) => color !== id);
      setColorsFavorite(filtered);
    } else {
      setColorsFavorite([...colorsFavorites, id]);
    }
  }

  function isfavorite(id) {
    if (checkFavorite(id) === id) {
      return true;
    } else {
      return false;
    }
  }

  function checkFavorite(id) {
    const check = colorsFavorites.filter((color) => color === id);
    return check[0];
  }

  return { colorsFavorites, toggleFavorite, isfavorite };
};
