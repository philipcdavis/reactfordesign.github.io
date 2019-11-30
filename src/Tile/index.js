import { createGlobalStyle } from 'styled-components'
import { color } from './Utils'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Chivo:400,700');

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

  @media (max-width: 600px) {
    body {
      font-size: 1.2em;
    }
  }
`;

export * from './Button';
export * from './Input';
export * from './Modal';
export * from './Tooltip';
export * from './Alert';
export * from './Table';
export * from './Utils';
