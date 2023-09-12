export const handleFavorites = (id, name, username, email, website, isFavorite, favorites, dispatch) => {
  console.log(favorites)
  console.log(isFavorite);
  if (isFavorite) {
    return
  }

  const newFavorite = { id, name, username, email, website }
  const updatedFavorites = [...favorites, newFavorite]

  dispatch({
    type: "ACTUALIZAR_DATOS_STORAGE",
    payload: updatedFavorites,
  })

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
}
