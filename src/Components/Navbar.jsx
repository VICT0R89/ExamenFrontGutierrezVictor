import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  {ContextGlobal} from './utils/global.context'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const toggleTheme = () => {
    const newTheme = state.theme === 'claro' ? 'oscuro' : 'claro'
    dispatch({ type: 'CAMBIAR_TEMA', payload: newTheme })
  }

  return (
    <nav>

      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar
