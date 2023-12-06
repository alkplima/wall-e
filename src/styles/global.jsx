import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { scroll-behavior: smooth; }

  :focus {
    outline: 0;
  }

  body {
    background: ${props => props.theme['surface']};
    color: ${props => props.theme['on-surface']};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input, textarea {
    caret-color: ${props => props.theme['primary']};
  }

  h1 {
    font: 700 3.5rem/4.25rem 'Inter', sans-serif;
  }

  h2 {
    font: 700 3rem/3.5rem 'Inter', sans-serif;
  }

  h3 {
    font: 700 2.5rem/3rem 'Inter', sans-serif;
    text-align: left;
  }

  h4 {
    font: 700 2rem/2.5rem 'Inter', sans-serif;
    text-align: left;
  }

  h5 {
    font: 700 1.5rem/1.75rem 'Inter', sans-serif;
  }

  h6 {
    font: 700 1.25rem/1.5rem 'Inter', sans-serif;
  }

  p {
    font: 400 1rem/1.5rem 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${props => props.theme['on-surface']};
  }

  @media(max-width: 1080px) {
    html {
      font-size: 82.5%;
    }
  }
`;

export const Subtitle = styled.p`
  font: 700 1rem/1.25rem 'Inter', sans-serif;
  /* color: ${props => props.theme['neutral-40']}; */
`;