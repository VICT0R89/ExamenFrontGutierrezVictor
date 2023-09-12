import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { state,dispatch } = useContext(ContextGlobal)
  const { data, theme } = state
  const themeClass = theme === 'claro' ? 'claro' : 'oscuro'

  const setData = () =>{
    const apiUrl = `https://jsonplaceholder.typicode.com/users`
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'ACTUALIZAR_DATOS_API', payload: data })
      })
      .catch((error) => {
        console.error('Error fetching dentist details:', error)
      })
  }
  useEffect(()=>{
    setData()
  },[""])

  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((dentist) => {
          let {id, name, username, website, email } = dentist
          return (
            <Card
              key={id}
              id={id}
              name={name}
              username={username}
              website={website}
              email={email}
              theme={themeClass}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home
