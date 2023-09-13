export const handleFavorites = (id, name, username, email, website, isFavorite, favorites, dispatch) => {
  
  if (isFavorite) {
    return
  }

  const newFavorite = { id, name, username, email, website }
  const updatedFavorites = [...favorites, newFavorite]

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  
  dispatch({
    type: "ACTUALIZAR_DATOS_STORAGE",
    payload: updatedFavorites,
  })

}
