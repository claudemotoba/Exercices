import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    width: 100%;
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `
