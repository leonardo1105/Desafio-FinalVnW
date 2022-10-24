
import styled from "styled-components";
import Quadron from "../../../../Assets/Fonts/Quadron.otf"


export const Header=styled.header` 
  @font-face {
    font-family: "Quadron";
    src: url(${Quadron}) format('truetype')
  };
  width:100%;
  display:flex;
  /* position:absolute; */
  /* top:0; */
  font-family: 'Quadron';
  background:rgb(0, 76, 190);
  align-items: center;
  padding:10px 50px;
  
  justify-content: space-between;
  /* box-shadow:0 2px 5px 0 lightgray; */
  img{
    width:55px;
  }

  ul{
    justify-content: space-evenly;
    list-style: none;
    display:flex;
    /* background:white; */
    width:500px;
    color:white;
  }
`