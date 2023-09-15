import React, { useContext } from 'react'
import  { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ContextGlobal)
  return (
    <footer className={state.theme}>
      <div>
        <p>Powered by</p>
        <p>VÍCTOR GUTIÉRREZ</p>
      </div>
        <img src="ExamenFrontGutierrezVictor/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
