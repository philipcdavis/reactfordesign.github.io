import React from "react";
import styled, {keyframes} from "styled-components";
import * as Icon from 'react-feather'
import { Flex, Text, Box } from "rebass/styled-components";
import { color } from '../Tile';


const Label = styled(Text)`
  text-transform: uppercase;
  color: ${color.yellow};
  font-size: 14px;
  font-weight: bold;
`;

const rotate = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`

const Clock = styled.svg`

  & polyline:first-of-type {
    animation: ${rotate} 5s infinite;
    animation-timing-function: linear;
    transform-origin: center center;
  }

  & polyline:last-of-type {
    animation: ${rotate} 60s infinite;
    animation-timing-function: linear;
    transform-origin: center center;
  }
`;


const ClockIcon = (props) => {
  return (
    <Clock
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color.yellow}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle style={{opacity: 0.3}} cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12"></polyline>
      <polyline points="12 12 16 14"></polyline>
      <circle stroke="none" fill={color.yellow} cx="12" cy="12" r="2"></circle>
    </Clock>
  );
}



const InProgress = () => {

  return (
    <Flex height="100%" justifyContent="center" flexDirection={"column"} alignItems="center" p={3}>
      <ClockIcon size={35} color={color.yellow} />
      <Label mt={2}>In Progress</Label>
    </Flex>
  );
}

export default InProgress;