import styled from "styled-components";

export const CardContainer=styled.section` 
  display:flex;
  justify-content: space-evenly;
  div{
    width:200px;
    height:200px;
    color:white;
    cursor:pointer;
  }
  div p{
    font-weight:400;
    font-size:2.5rem;
  }
  
`
export const Carta=styled.div` 
  :nth-child(1){
    background:red;
  }
  :nth-child(2){
    background:yellow;
  }
  :nth-child(3){
    background:green;
  }
  :nth-child(4){
    background:crimson
  }
  :nth-child(5){
    background:blue;
  }
`
export const Mod=styled.div`
  position:absolute;
  top:50px;
  left: 32%;
  background:pink;
  width:400px;
  height:500px;

`   
export const Caixa=styled.div` 
  filter:blur(20px);
  position:absolute;
  top:0;
  width:100%;
  height:100vh;

`


