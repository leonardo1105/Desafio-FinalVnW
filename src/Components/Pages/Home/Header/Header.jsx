import React from "react";
import { Link } from "react-router-dom";
import Icon from '../../../../Assets/Images/coding.png'
import * as S from './HeaderStyle'


export default function Header(){
  return(
    <S.Header>
      <img src={Icon} alt="Ícone"/>
      <ul>
        <Link to="/objetivos_sustentaveis"><li>OBJETIVOS SUSTENTÁVEIS</li></Link>
        <Link><li>PROJETOS</li></Link>
        <li></li>
      </ul>
    </S.Header>
  )
}