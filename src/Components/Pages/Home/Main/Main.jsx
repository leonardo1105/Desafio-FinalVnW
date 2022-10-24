import React from 'react';
import * as S from './MainStyle'
import Code from '../../../../Assets/Images/code.jpeg'

export default function Main(){
  return(
    <S.Main>
      <figure>
        <img src={Code}/>
      </figure>
      <div>
        <h1>Olá,eu sou Leonardo</h1>
        <p>Sou estudante de Desenvolvimento Front-End em React</p>
        <p>Atualmente cursando Engenharia de Software</p>
      </div>
    </S.Main>
  )
}