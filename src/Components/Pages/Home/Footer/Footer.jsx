import React from 'react';
import Linkedin from '../../../../Assets/Images/linkedin.png'
import Github from '../../../../Assets/Images/github.png'
import * as S from './StyleFooter'

export default function Footer(){
  return(
    <S.Footer>
      <S.Container>
        <img src={Linkedin} alt="Ícone - Linkedin" />
        <img src={Github} alt="Ícone - Github" />
      </S.Container>
    </S.Footer>
  )
}