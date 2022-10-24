import styled from "styled-components";

export const CardContainer=styled.section` 
  display:flex;
  justify-content: space-evenly;
  padding-top:30px;
  flex-wrap: wrap;
  @media only screen and (max-width:370px){
    gap:15px;
  }
  div{
    width:180px;
    height:180px;
    color:white;
    cursor:pointer;
    border-radius:8px;
    padding-left:5px;
    margin:0 auto;
  }
  div p{
    font-weight:400;
    font-size:2.5rem;
    
  }
  div span{
    position:relative;
    font-size:3rem;
    left:130px;
    top:80px;
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
  top:10%;
  left:34%;
  background:white;
  width:400px;
  height:500px;
  z-index:1;
  border-radius: 7px;
  @media only screen and (max-width:1160px){
    left:32%;
  }
  @media only screen and (max-width:1072px){
    left:30%;
  }
  @media only screen and (max-width:888px){
    left:28%;
  }
  @media only screen and (max-width:796px){
    left:25%;
  }
  @media only screen and (max-width:766px){
    left:23%;
  }
  @media only screen and (max-width:700px){
    left:21%;
  }
  @media only screen and (max-width:670px){
    left:19%;
  }
  @media only screen and (max-width:598px){
    left:18%;
  }
  @media only screen and (max-width:568px){
    width:350px;
    height:450px;
  }
  @media only screen and (max-width:506px){
    left:17%;
  }
  @media only screen and (max-width:478px){
    /* left:15%;
     */
    width:300px;
    height:450px;
  }
  @media only screen and (max-width:416px){
    left:15%;
  }
  @media only screen and (max-width:400px){
    left:13%;
  }
  @media only screen and (max-width:370px){
    left:11%;
    top:60%;
  }
  @media only screen and (max-width:360px){
    left:9%;
  }
  @media only screen and (max-width:350px){
    left:7%;
  }
  @media only screen and (max-width:340px){
    left:5%;
  }
  @media only screen and (max-width:330px){
    left:3%;
  }

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
  @media only screen and (max-width:890px){
    height:1080px;
  }
  @media only screen and (max-width:400px){
    height:1450px;
  }
`


