import { Heading, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import { colorChange, hexToRGB } from '../components/Utils'
import { color } from '../Tile'

export const RainbowHeading = styled(Heading)`
  animation: ${colorChange("color")} 10s infinite alternate;
`

export const RainbowHr = styled.hr`
  animation: ${colorChange("border-color", 0.3)} 10s infinite alternate;
`

export const P = styled(Text)`
  margin-bottom: 40px;
`

export const Markdown = styled.div`
         font-size: 1.2rem;

         & .img-lg {
           width: 130%;
           margin-left: -15%;
           margin-bottom: 40px;
           margin-top: 20px;
         }

         & .img-sm {
           width: 70%;
           margin-left: 15%;
           margin-bottom: 40px;
           margin-top: 20px;
         }

         @media (max-width: 700px) {
           .img-sm,
           .img-lg {
             width: 100%;
             margin-left: 0;
           }
         }

         & h1,
         & h2,
         & h3,
         & h4 {
           color: white;
           margin-bottom: 0;
           font-weight: normal;
         }

         & h1 {
           font-size: 1.4em;
           text-align: center;
           margin-bottom: 2em;
           margin-top: 0;
           font-weight: bold;
         }

         & h2 {
           font-size: 1.2em;
           text-align: center;
           margin-top: 2em;
         }

         & h3 {
           font-size: 1.1em;
           margin-top: 3em;
           margin-bottom: 0;
           line-height: 0;
         }

         & h4 {
           font-size: 0.9em;
           margin-top: 2em;
           margin-bottom: 0;
           font-weight: bold;
         }

         @media (min-width: 700px) {
           & ul {
             padding-left: 0;
           }

           & ol {
             margin-left: 0;
             padding-left: 0;
           }
         }

         & a {
           color: inherit;
           text-decoration: none;
           border-bottom: 2px solid ${color.gray2};

           &:hover {
             color: white;
             border-bottom-color: ${color.white};
           }
         }

         & table {
           width: 100%;
           table-layout: fixed;
           border-collapse: collapse;
         }

         & table td {
           border: 2px solid ${color.gray3};
           padding: 10px;
           border-radius: 10px;
           text-align: center;
         }

         & table tr:last-child td:first-child {
           border-bottom-left-radius: 10px;
         }

         & table tr:last-child td:last-child {
           border-bottom-right-radius: 10px;
         }

         & hr {
           border: none;
           border-bottom: 2px solid ${color.gray2};
           width: 70%;
           margin-top: 2.5em;
           margin-bottom: 2.5em;
         }

         & pre {
           padding: 1em;
           margin: 0.5em 0;
           overflow: auto;
           border-radius: 0.3em;
         }

         & code {
           color: white;
           border-radius: 0.3em;
           text-shadow: 0 1px rgba(0, 0, 0, 0.5);
           padding: 3px 5px;
         }

         & pre > code {
           background-color: transparent;
         }

         & pre,
         & code {
           background: ${hexToRGB(color.gray2, 0.7)};
           font-size: 1rem;
           font-family: menlo, consolas, monospace;
         }
       `;
