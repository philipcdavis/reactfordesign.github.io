import styled from 'styled-components'
import { Btn } from '../Tile'
import { colorChange } from './Utils'

export const BtnLink = Btn.withComponent('a');

export const BtnRainbow = styled(BtnLink)`
  text-decoration: none;
  animation: ${colorChange("background")} 10s infinite alternate;
`
