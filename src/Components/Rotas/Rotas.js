import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Onu from '../Pages/ONU/Onu'
import Error from '../Pages/Error/Error'

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/objetivos_sustentaveis" element={<Onu/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}