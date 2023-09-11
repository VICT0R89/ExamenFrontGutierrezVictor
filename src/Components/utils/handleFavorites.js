export const handleFavorites = (id, name, username, favorites, dispatch) => {
    const isFavorite = favorites.some((favorite) => favorite.id === id);
    let updatedFavorites = [];
  
    if (isFavorite) {
      updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    } else {
      const newFavorite = { id, name, username };
      updatedFavorites = [...favorites, newFavorite];
    }
  
    dispatch({
      type: "ACTUALIZAR_DATOS_API",
      payload: updatedFavorites,
    });
  
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };