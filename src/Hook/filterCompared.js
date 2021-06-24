export function filterCompared(itemArray, idArray) {
  const favorites = [];
  idArray.forEach((id) => {
    const [filtered] = itemArray.filter((color) => color.id === id);

    favorites.push(filtered);
  });

  return favorites;
}
