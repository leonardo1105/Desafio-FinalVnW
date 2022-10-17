import React,{useState,useRef} from 'react';
import * as S from './StyleCard';

export default function Onu(){ 
  const refContainer=useRef(null)
  const refMod=useRef(null)
  const[status,setStatus]=useState(false)
  const[card,setCard]=useState({})
  const modal=(item) => {
    setCard(item)
    setStatus(true)
    refContainer.current.style.filter="blur(1px)"
    refContainer.current.style.opacity="0.5"
  }
  const off=() =>{
    setStatus(false)
    refContainer.current.style.filter="none"
    refContainer.current.style.opacity="1"
  }
  const Array=[{
    id:1,
    num:1,
    title:"",
    description:"oi",
    color:"red"
  },
  {
    id:2,
    num:2,
    title:"",
    description:"ola",
    color:"yellow"
  },
  {
    id:3,
    num:3,
    title:"",
    description:"abacaxi",
    color:"green"
  },
  {
    id:4,
    num:4,
    title:"",
    description:"arroz",
    color:"crimson"
  },
  {id:5,
    num:5,
    title:"",
    description:"feijão com arroz",
    color:"blue"}]
  return(
    <>
      <S.Caixa ref={refContainer}>
      <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
      <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à 
        ação para acabar com a pobreza, proteger o meio ambiente e o clima e 
        garantir que as pessoas, em todos os lugares, possam desfrutar de paz 
        e de prosperidade. Estes são os objetivos para os quais as Nações Unidas 
        estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
      <S.CardContainer>{Array.map(item => (
        <S.Carta onClick={() => {modal(item)}}>
          <p>{item.num}</p>
          <h2>{item.title}</h2>
        </S.Carta>
      ))}</S.CardContainer>
      </S.Caixa>
    
    {status && (
      <>
        <S.Bo onClick={() => {off()}}></S.Bo>
        <S.Mod>
          <div>
            <p>{card.num}</p>
            <p>{card.description}</p>
          </div>
          <button onClick={() => {off()}}>x</button>
        </S.Mod>
      </>)}
      
    </>
  )
  }
