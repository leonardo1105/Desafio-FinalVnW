import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <h1>Leonardo Nunes Marques</h1>
      <ul>
        <Link to="/objetivos_sustentaveis"><li>Objetivos Sustentáveis</li></Link>
        <Link><li>Projetos</li></Link>
        <li></li>
      </ul>
    </header>
  )
}