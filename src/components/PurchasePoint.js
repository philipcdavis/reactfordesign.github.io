import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { colorChange } from '../components/Utils'
import { RainbowHeading } from '../components/Text'
import { CheckCircle } from 'react-feather'

const PurchasePoint = function(props) {
  return (
    <Box>
      <StyledCheck size={28} />
      <StyledHeading mb={[3,4]} fontSize={[3,3,3,4]}>{props.children}</StyledHeading>
    </Box>
  )
};

const StyledCheck = styled(CheckCircle)`
  & path {
    animation: ${colorChange("stroke", 0.4)} 10s infinite alternate;
  }

  & polyline {
    animation: ${colorChange("stroke")} 10s infinite alternate;
  }

  display: inline-block;
`

const StyledHeading = styled(RainbowHeading)`
  position: relative;
  top: -7px;
  left: 10px;
  display: inline-block;
`

export default PurchasePoint;
