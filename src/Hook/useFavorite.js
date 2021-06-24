import { useEffect, useState } from "react";

const useFavorite = () => {
  const [colorsFavoritesId, setColorsFavorite] = useState([]);

  useEffect(() => {
    const persistedColorsFavorite = localStorage.getItem("colorsFavoritesId");
    const colorsFavoritesId = JSON.parse(persistedColorsFavorite);
    setColorsFavorite(colorsFavoritesId || []);
  }, []);

  useEffect(() => {
    const StringifiedColorsFavorite = JSON.stringify(colorsFavoritesId);
    localStorage.setItem("colorsFavoritesId", StringifiedColorsFavorite);
  }, [colorsFavoritesId]);

  function toggleFavorite(id) {
    if (checkFavorite(id) === id) {
      const filtered = colorsFavoritesId.filter((color) => color !== id);
      setColorsFavorite(filtered);
    } else {
      setColorsFavorite([...colorsFavoritesId, id]);
    }
  }

  function isFavorite(id) {
    if (checkFavorite(id) === id) {
      return true;
    } else {
      return false;
    }
  }

  function checkFavorite(id) {
    const check = colorsFavoritesId.filter((color) => color === id);
    return check[0];
  }

  return { colorsFavoritesId, toggleFavorite, isFavorite };
};

export default useFavorite;
