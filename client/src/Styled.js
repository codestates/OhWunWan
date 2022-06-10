import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border-color: #EBEBEB;
    display: flex;
    align-self: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #000;
  }
` 

export default GlobalStyle