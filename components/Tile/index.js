import { createGlobalStyle } from 'styled-components'
import { color } from './Utils'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: ${color.black};
    font-family: Chivo, sans-serif;
    color: ${color.gray0};
    font-size: 1.4em;
    line-height: 1.5;
  }

  ::selection {
    background-color: ${color.gray0};
    color: white;
  }

  h1,h2,h3,h4 {
    font-family: inherit !important;
  }

  @media (max-width: 600px) {
    body {
      font-size: 1.2em;
    }
  }
`;

export * from './Button';
export * from './Input';
export * from './Icon';
export * from './Modal';
export * from './Tooltip';
export * from './Alert';
export * from './Table';
export * from './Utils';
