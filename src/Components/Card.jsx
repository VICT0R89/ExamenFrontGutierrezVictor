import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "../utils/global.context"
import { handleFavorites } from "../utils/handleFavorites"

const Card = ({ name, username, id, theme }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { data: favorites } = state;
  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const toggleFavorite = () => {
    handleFavorites(id, name, username, favorites, dispatch)
  }

  return (
    <div className={`card ${theme}`}>
      <h3>{name}</h3>
      <p>@{username}</p>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <Link to={`/dentist/${id}`} className="detailLink">
        View Details
      </Link>
    </div>
  )
}

export default Card
