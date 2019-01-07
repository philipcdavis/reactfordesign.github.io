import React from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { Box } from 'rebass'
import { colorChange } from '../components/Utils'
import { RainbowHeading } from '../components/Text'
import { CheckCircle } from 'react-feather'

const PurchasePoint = function(props) {
  return (
    <Box>
      <StyledCheck size={28} />
      <RainbowHeading mb={4} fontSize={[4]}>{props.children}</RainbowHeading>
    </Box>
  )
};

const StyledCheck = styled(CheckCircle)`
  animation: ${colorChange("stroke")} 10s infinite alternate;
  opacity: 0.5;
  display: inline-block;
`

export default PurchasePoint;
