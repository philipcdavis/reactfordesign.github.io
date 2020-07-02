import React, { useState } from "react";
import { Btn, color, isDarkBackground } from '../Tile'
import { Box, Flex, Text } from "rebass/styled-components";
import styled, { keyframes, css } from "styled-components";

const glimmer = keyframes`
  0%{  opacity: 0}
  50%{ opacity: 0}
  60%{ opacity: 1}
  85%{ opacity: 1}
  100%{ opacity: 0}
`;

const gap = 90;
const step = 50;

const animate = css`
  animation: ${ glimmer } 3s linear infinite;
`

const Container = styled(Box)`
  position: relative;
`;

const Color = styled(Box)`
  width: 100%;
  height: 30px;
  background-color: ${props => props.animated ? props.bg : color.gray2};
  margin: 2px;
  border-radius: 2px;
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => props.delay * step}ms;
  `}
`;

const Button = styled(Box)`
  width: ${(props) => (props.width ? props.width : 100)}%;
  height: ${(props) => (props.height ? props.height : 20)}px;
  background-color: ${(props) => props.animated ? props.bg : color.gray2};
  margin: 2px;
  border-radius: 2px;
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => gap * 2 + props.delay * step}ms;
  `}
`;

const Modal = styled(Box)`
  width: 100%;
  border-radius: 4px;
  background-color: ${props => props.animated ? color.black : color.gray2};
  border: 2px solid ${color.gray2};
  height: 70px;
  margin-top: 8px;
  margin-bottom: 10px;
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => gap * 3 + props.delay * step}ms;
  `}
`;

const Row = styled.hr`
  border: 1px solid ${props => props.animated ? props.color : color.gray2};
  border-radius: 4px;
  width: 100%;
  margin-top: 2px;
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => gap * 3 + props.delay * step}ms;
  `}
`;

const Bar = styled(Box)`
  width: 100%;
  height: 20px;
  border-radius: 2px;
  background-color: ${props => props.animated ? color[props.color] : color.gray2};
  border: ${props => isDarkBackground(props.color) ? `2px solid ${color.gray2}` : "none"};
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => (gap * 3) + props.delay * step}ms;
  `}
`;

export const TooltipLight = styled(Box)`
  background-color: ${props => props.animated ? 'white' : color.gray2};
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
  ${props => props.animated && css`
    ${animate};
    animation-delay: ${props => (gap * 3) + props.delay * step}ms;
  `}

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid ${props => props.animated ? 'white' : color.gray2};
    left: calc(50% - 5px);
    bottom: -5px;
  }
`

export const TooltipDark = styled(TooltipLight)`
  background-color: ${props => props.animated ? color.purple : color.gray2};

  &::after {
    border-top: 5px solid ${props => props.animated ? color.purple : color.gray2};
  }
`;

const Layout = (props) => {
  return (
    <Box style={{position: "absolute", top: 15, left: 15, right: 15, bottom: 15}}>
      <Flex>
        <Color animated={props.animated} delay={0} bg={color.blue} />
        <Color animated={props.animated} delay={1} bg={color.purple} />
        <Color animated={props.animated} delay={2} bg={color.red} />
        <Color animated={props.animated} delay={3} bg={color.yellow} />
        <Color animated={props.animated} delay={4} bg={color.green} />
        <Color animated={props.animated} delay={5} bg={color.white} />
        <Color animated={props.animated} delay={6} bg={color.gray0} />
        <Color animated={props.animated} delay={7} bg={color.gray1} />
        <Color animated={props.animated} delay={8} style={{ border: `1px solid ${color.gray2}` }} bg={color.gray3} />
        <Color
          animated={props.animated}
          delay={9}
          bg={color.black}
          style={{ border: `1px solid ${color.gray2}` }}
        />
      </Flex>

      <Flex>
        <Button animated={props.animated} delay={0} bg={color.blue} />
        <Button animated={props.animated} delay={1} bg={color.red} />
        <Button animated={props.animated} delay={2} bg={color.green} />
        <Button animated={props.animated} delay={3} bg={color.white} />
        <Button
          delay={4}
          animated={props.animated}
          bg={color.black}
          style={{ border: `1px solid ${color.gray2}` }}
        />
      </Flex>

      <Flex>
        <Flex width={1 / 2} pr={1} flexDirection={"column"}>
          <Flex mt={2} width={1} alignItems={"center"}>
            <Button animated={props.animated} delay={1} width={50} height="12px" bg={color.blue} />
            <Button animated={props.animated} delay={2} width={80} height="20px" bg={color.blue} />
            <Button animated={props.animated} delay={3} height="25px" bg={color.blue} />
          </Flex>
          <Bar animated={props.animated} delay={1} mt={2} color={"green"} />
          <Bar animated={props.animated} delay={2} mt={2} color={"red"} />
          <Flex mt={2}>
            <TooltipLight animated={props.animated} delay={3} />
            <TooltipDark animated={props.animated} delay={3} />
          </Flex>
          <Bar animated={props.animated} delay={5} mt={2} color={"white"} />
          <Bar animated={props.animated} delay={4} mt={2} color={"black"} />


        </Flex>
        <Flex flexDirection={'column'} pl={1} width={1 / 2}>
          <Modal animated={props.animated} delay={2} />
          <Flex flexDirection={'column'}>
            <Row animated={props.animated} color={color.green} delay={0} />
            <Row animated={props.animated} color={color.blue} delay={1} />
            <Row animated={props.animated} color={color.purple} delay={2} />
            <Row animated={props.animated} color={color.red} delay={3} />
            <Row animated={props.animated} color={color.yellow} delay={4} />
            <Row animated={props.animated} color={color.white} delay={5} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const DSFlexibleComponent = () => {
  return (
    <Container>
      <Layout />
      <Layout animated />
    </Container>
  );
}

export default DSFlexibleComponent;