// src/styles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #141414;
    color: #fff;
    font-family: 'Arial', sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;