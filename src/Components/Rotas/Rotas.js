import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Onu from '../Pages/ONU/Onu'

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/objetivos_sustentaveis" element={<Onu/>}/>
      </Routes>
    </Router>
  )
}