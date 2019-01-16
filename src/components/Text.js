import { Heading, Text } from 'rebass'
import styled from 'styled-components'
import { colorChange } from '../components/Utils'

export const RainbowHeading = styled(Heading)`
  animation: ${colorChange("color")} 10s infinite alternate;
`

export const RainbowHr = styled.hr`
  animation: ${colorChange("border-color", 0.3)} 10s infinite alternate;
`

export const P = styled(Text)`
  margin-bottom: 40px;
`
