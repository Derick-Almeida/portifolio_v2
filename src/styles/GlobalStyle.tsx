import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  :root{
    --white: #FFFFFF;
    --black: #000000;
    --grey-1: #FDFDFD;
    --grey-2: #1F1F1F;
    --blue-1: #121AB3;
    --blue-2: #030444;
    --blue-3: #010122;
    --yellow-1: #FFFF0099;
    --shadow:#00000080;
    --daysOne: 'Days One', sans-serif;
    --inter: 'Inter', sans-serif;
    --monoton: 'Monoton', cursive;
    --shrikhand: 'Shrikhand', cursive;
  }
  body{
    overflow: hidden;
    background: var(--blue-3);
    height: 100vh;
    width: 100%;
  }
  ul,ol,li{
    list-style: none;
  }
  button{
    cursor: pointer;
    outline: none;
  }
  a{
    text-decoration: none;
  }
  
`;

export const ContainerPages = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
