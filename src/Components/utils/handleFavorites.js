export const handleFavorites = (id, name, username, favorites, dispatch) => {
  const isFavorite = favorites.some((favorite) => favorite.id === id)

  if (isFavorite) {
    return
  }

  const newFavorite = { id, name, username }
  const updatedFavorites = [...favorites, newFavorite]

  dispatch({
    type: "ACTUALIZAR_DATOS_API",
    payload: updatedFavorites,
  })

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
}
