export const handleFavorites = (id, name, username, email, website, isFavorite, favorites, dispatch) => {
  
  let updatedFavorites

  if (isFavorite) {
    updatedFavorites = favorites.filter(fav => fav.id !== id)
  } else {
    const newFavorite = { id, name, username, email, website }
    updatedFavorites = [...favorites, newFavorite]
  }

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  
  dispatch({
    type: "ACTUALIZAR_DATOS_STORAGE",
    payload: updatedFavorites,
  })

}
