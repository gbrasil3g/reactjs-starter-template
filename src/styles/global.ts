import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    color: #000;
    transition: color .2s ease-in-out;
    transition: box-shadow .2s ease-in-out;
  }

  ul {
    list-style: none;
  }
`;