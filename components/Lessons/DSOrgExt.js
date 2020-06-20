import React, { useState } from "react";
import { Btn, color, isDarkBackground } from '../Tile'
import { Box, Flex, Text } from "rebass/styled-components";
import styled, { keyframes, css } from "styled-components";

const glimmer = keyframes`
    0%{  filter: contrast(0%) brightness(0.3);}
    50%{ filter: contrast(0%) brightness(0.3);}
    60%{ filter: contrast(100%) brightness(1);}
    85%{ filter: contrast(100%) brightness(1);}
    100%{ filter: contrast(0%) brightness(0.3);}
`;

const gap = 90;
const step = 50;

const animate = css`
  animation: ${ glimmer } 3s linear infinite;
`

const Color = styled(Box)`
  width: 100%;
  height: 30px;
  background-color: ${props => props.bg};
  margin: 2px;
  border-radius: 2px;
  ${animate};
  animation-delay: ${props => props.delay * step}ms;
`;

const Button = styled(Box)`
  width: ${(props) => (props.width ? props.width : 100)}%;
  height: ${(props) => (props.height ? props.height : 20)}px;
  background-color: ${(props) => props.bg};
  margin: 2px;
  border-radius: 2px;
  ${animate};
  animation-delay: ${props => gap * 2 + props.delay * step}ms;
`;

const Modal = styled(Box)`
  width: 100%;
  border-radius: 4px;
  background-color: ${color.black};
  border: 2px solid ${color.gray2};
  height: 70px;
  margin-top: 8px;
  margin-bottom: 10px;
  ${animate};
  animation-delay: ${props => gap * 3 + props.delay * step}ms;
`;

const Row = styled.hr`
  border: 1px solid ${props => props.color};
  border-radius: 4px;
  width: 100%;
  margin-top: 2px;
  ${animate};
  animation-delay: ${props => gap * 3 + props.delay * step}ms;
`;

const Bar = styled(Box)`
  width: 100%;
  height: 20px;
  border-radius: 2px;
  background-color: ${props => color[props.color]};
  border: ${props => isDarkBackground(props.color) ? `2px solid ${color.gray2}` : "none"};
  ${animate};
  animation-delay: ${props => (gap * 3) + props.delay * step}ms;
`;

export const TooltipLight = styled(Box)`
  background-color: white;
  padding: 8px;
  width: 50px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  border: none;
  outline: none;
  color: ${color.gray2};
  margin-right: 10px;
  display: inline-block;
  position: relative;
  ${animate};
  animation-delay: ${props => (gap * 3) + props.delay * step}ms;

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid white;
    left: calc(50% - 5px);
    bottom: -5px;
  }
`



export const TooltipDark = styled(TooltipLight)`
  background-color: ${color.purple};

  &::after {
    border-top: 5px solid ${color.purple};
  }
`;



const DSFlexibleComponent = () => {
  
  return (
    <Box p={3}>
      <Flex>
        <Color delay={0} bg={color.blue} />
        <Color delay={1} bg={color.purple} />
        <Color delay={2} bg={color.red} />
        <Color delay={3} bg={color.yellow} />
        <Color delay={4} bg={color.green} />
        <Color delay={5} bg={color.white} />
        <Color delay={6} bg={color.gray0} />
        <Color delay={7} bg={color.gray1} />
        <Color delay={8} bg={color.gray2} />
        <Color
          delay={9}
          bg={color.black}
          style={{ border: `1px solid ${color.gray2}` }}
        />
      </Flex>

      <Flex>
        <Button delay={0} bg={color.blue} />
        <Button delay={1} bg={color.red} />
        <Button delay={2} bg={color.green} />
        <Button delay={3} bg={color.white} />
        <Button
          delay={4}
          bg={color.black}
          style={{ border: `1px solid ${color.gray2}` }}
        />
      </Flex>

      <Flex>
        <Flex width={1 / 2} pr={1} flexDirection={"column"}>
          <Flex mt={2} width={1} alignItems={"center"}>
            <Button delay={1} width={50} height="12px" bg={color.blue} />
            <Button delay={2} width={80} height="20px" bg={color.blue} />
            <Button delay={3} height="25px" bg={color.blue} />
          </Flex>
          <Bar delay={1} mt={2} color={"green"} />
          <Bar delay={2} mt={2} color={"red"} />
          <Flex mt={2}>
            <TooltipLight delay={3} />
            <TooltipDark delay={3} />
          </Flex>
          <Bar delay={5} mt={2} color={"white"} />
          <Bar delay={4} mt={2} color={"black"} />
         
        
        </Flex>
        <Flex flexDirection={'column'} pl={1} width={1 / 2}>
          <Modal delay={2} />
          <Flex flexDirection={'column'}>
            <Row color={color.green} delay={0} />
            <Row color={color.blue} delay={1}/>
            <Row color={color.purple} delay={2}/>
            <Row color={color.red} delay={3}/>
            <Row color={color.yellow} delay={4}/>
            <Row color={color.white} delay={5}/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default DSFlexibleComponent;