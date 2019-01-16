import styled from 'styled-components'
import { Btn } from '../Tile'
import { colorChange } from './Utils'

export const BtnLink = styled(Btn).attrs({ as: 'a' })`
  text-decoration: none;
  display: inline-block;
`;


export const BtnRainbow = styled(BtnLink)`
  animation: ${colorChange("background")} 10s infinite alternate;
`

export const BtnInput = styled(BtnRainbow).attrs({ as: 'input' })`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  -webkit-appearance: none;
  margin: 0;
`;
