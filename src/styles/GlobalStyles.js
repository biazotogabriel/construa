import { createGlobalStyle } from 'styled-components';
import { headerHeight } from '../config/dimensions';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: #fff;
  }

  html, body, #root, .App {
    height: 100%;
    overflow-y: hidden;

    .middleConteinerApp {
    display: flex;
    height: calc(100% - ${headerHeight});
  }
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
