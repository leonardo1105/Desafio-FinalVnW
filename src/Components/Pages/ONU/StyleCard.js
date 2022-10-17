import styled from "styled-components";

export const CardContainer=styled.section` 
  display:flex;
  justify-content: space-evenly;
  padding-top:30px;
  div{
    width:180px;
    height:180px;
    color:white;
    cursor:pointer;
    border-radius:8px;
    padding-left:5px;
  }
  div p{
    font-weight:400;
    font-size:2.5rem;
  }
  
`
export const Carta=styled.div` 
  
  box-shadow: 0 2px 3px 0 black;
  transition:0.3s all;
  :hover{
    margin-top:-5px;
    box-shadow:0 5px 8px 0 #920000;
  }
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
  font-size:3rem;
  box-shadow:0 2px 4px 0 black;
  position:absolute;
  top:50px;
  left: 32%;
  background:white;
  width:400px;
  height:500px;
  z-index:1;
  border-radius: 7px;

  button{
    cursor:pointer;
    padding:8px 13px;
    position:absolute;
    top:-45px;
    right:5px;
    background:red;
    border:none;
    box-shadow: 1px 3px 0 0 #920000;
    :hover{
      background:#ec0000
    }
  }
`   
export const Caixa=styled.div` 
  padding:20px;
  font-family:'Roboto';
`

export const Bo=styled.div`
  position:absolute;
  top:0;
  width: 100vw;
  height:100vh;
  background:black;
  opacity:0.5;
`


