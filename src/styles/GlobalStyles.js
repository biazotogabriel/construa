import { createGlobalStyle } from 'styled-components';
//import { primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: #fff;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
