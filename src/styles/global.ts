import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 56px 24px;

    @media (max-width: 500px) {
    align-items:center;
    vertical-align: baseline;
  }
  }

  `;
