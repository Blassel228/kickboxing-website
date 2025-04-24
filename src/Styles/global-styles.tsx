import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
   overflow-x: hidden; 
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--tg-theme-bg-color, #1a1a1a);
    color: var(--tg-theme-text-color, #fff);
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: auto; 
    width: 100%;
  }

  :root {
    --primary-bg-color: var(--tg-theme-bg-color, #1a1a1a);
    --primary-bg-color-rgb: rgba(23, 33, 43, 1);
    --secondary-bg-color: var(--tg-theme-secondary-bg-color, #2a2a2a);
    --dark-gold-color: #3a3924;
    --white-gold-color: #fbf3da;
    --light-gold-color: #ddb618;
    --primary-light-color: var(--tg-theme-button-color, #ff6b00);
    --font-family: "Poppins", sans-serif;
    --font-color: var(--tg-theme-text-color, #fff);
  }
`;
