import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { useContext } from 'react'
import  { ContextGlobal } from './Components/utils/global.context'
import { Route, Routes } from 'react-router-dom'


function App() {
  const { state } = useContext(ContextGlobal)
  return (
      <div className={`App ${state.theme}`}>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dentist/:id" element={<Detail theme = {state.theme} />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer/>
      </div>
  )
}

export default App