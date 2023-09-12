import React, { useContext } from 'react'
import  { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ContextGlobal)
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer

/* 
, { useContext }
import  { ContextGlobal } from './utils/global.context'
const { state } = useContext(ContextGlobal)
className={state.theme}
*/