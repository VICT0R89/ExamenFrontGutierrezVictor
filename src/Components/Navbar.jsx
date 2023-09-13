import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  
  const { state, dispatch } = useContext(ContextGlobal)
  const toggleTheme = () => {
    const newTheme = state.theme === 'claro' ? 'oscuro' : 'claro'
    dispatch({ type: 'CAMBIAR_TEMA', payload: newTheme })
  }

  return (
    <nav id='f-header' className={state.theme}>
      <img src="/images/DH.png" alt="logo" />
      <div className='linksContainer'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      {state.theme === 'claro' ?
      <button onClick={toggleTheme}  className={`h-btn ${state.theme}`}>&#x1F319;</button>
      :
      <button onClick={toggleTheme}  className={`h-btn ${state.theme}`}>&#x2600;</button>
    }
    </nav>
  )
}

export default Navbar
