import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"
import { handleFavorites } from "./utils/handleFavorites"

const Card = ({ name, username, id, theme,email, website }) => {
  const { state, dispatch } = useContext(ContextGlobal)
  const { favorites } = state
  const isFavorite = favorites.some((e)=>e.id === id)

  const toggleFavorite = () => {
    handleFavorites(id, name, username, email, website, isFavorite, favorites, dispatch)
  }

  return (
    <div className={`card ${theme}`}>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? "-" : "+"}
      </button>
      <Link to={`/dentist/${id}`} className="detailLink">
        View Details
      </Link>
    </div>
  )
}

export default Card
