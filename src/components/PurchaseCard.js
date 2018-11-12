import React from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { Heading, Text, Box } from 'rebass'
import { BtnRainbow } from '../components/Button'
import { colorChange } from '../components/Utils'

const PurchaseCard = function(props) {
  return (
    <Card px={[2,"50px"]} py={[4,5]}>
      <RainbowHeading fontSize={[4,5]}>Early Bird Access</RainbowHeading>
      <Text color="white" fontSize={[18, 21]} mb={4} mt={3} css={{
        opacity: 0.5
      }}>
        Get Access to future videos as they are released.
        The Price will be going up as more videos finish.
      </Text>
      <BtnRainbow href="https://gum.co/reactfordesign" target="_blank">Early Bird Purchase</BtnRainbow>
    </Card>
  )
};

const RainbowHeading = styled(Heading)`
  animation: ${colorChange("color")} 10s infinite alternate;
`

const Card = styled(Box)`
  border-radius: 5px;
  text-align: center;
  border: 3px solid ${color.gray3};
  animation: ${colorChange("border-color", 0.1)} 10s infinite alternate;
`;

export default PurchaseCard;
