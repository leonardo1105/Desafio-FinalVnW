import React,{useState} from 'react';
import * as S from './StyleCard'

export default function Card1(){
  const[status,setStatus]=useState(false)
  const[card,setCard]=useState({})
  const modal=(item) => {
    setCard(item)
    setStatus(status===true? false : true)
  }

  const Array=[{
    id:1,
    num:1,
    title:"",
    description:"oi"
  },
  {
    id:2,
    num:2,
    title:"",
    description:"ola"
  },
  {
    id:3,
    num:3,
    title:"",
    description:"abacaxi"
  },
  {
    id:4,
    num:4,
    title:"",
    description:"arroz"
  },
  {id:5,
    num:5,
    title:"",
    description:"feijão com arroz"}]
  
  return(
    <>
    <S.CardContainer>{Array.map(item => (
      <S.Carta onClick={() => {modal(item)}}>
        <p>{item.num}</p>
        <h2>{item.title}</h2>
      </S.Carta>
    ))}</S.CardContainer>
    {status && (
    <S.Caixa>
      <S.Mod>
      <p>{card.num}</p>
      <p>{card.description}</p>
      </S.Mod>
    </S.Caixa>)}
    
    </>
  )
}