import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../utils/global.context'

const Home = () => {

  const { state } = useContext(ContextGlobal)
  const { data, theme } = state
  const themeClass = theme === 'claro' ? 'light' : 'dark'

  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((dentist) => {
          let {id, name, username } = dentist
          return (
            <Card
              key={id}
              name={name}
              username={username}
              id={id}
              theme={themeClass}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home
