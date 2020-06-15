import React, { useState } from "react";
import { Btn, color } from '../Tile'
import { Box, Flex, Text } from "rebass/styled-components";
import styled from "styled-components";
import { hexToRGB } from "../Utils";

const ColorPill = styled.div`
  background-color: ${(props) =>
    props.active === props.color
      ? color[props.color]
      : hexToRGB(color[props.color], 0.1)};
  border: ${(props) => `2px solid ` + color[props.color]};
  margin-bottom: 2px;
  width: 20px;
  height: 20px;
  transition: 0.1s background ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active === props.color
        ? color[props.color]
        : hexToRGB(color[props.color], 0.4)};
  }

  &:first-of-type {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }

  &:last-of-type {
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

const SizeText = styled(Text)`
  font-family: menlo, monospace;
  font-size: 14px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
  color: ${(props) =>
    props.active === props.size ? color.white : color.gray1};

  &:hover {
    color: ${(props) =>
      props.active === props.size ? color.white : color.gray0};
  }
`;

const DSFlexibleComponent = () => {
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("md");  
  return (
    <>
      <Flex
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Btn
          style={{ willChange: "padding, font-size" }}
          size={size}
          color={color}
        >
          Hello
        </Btn>
      </Flex>
      <Box style={{ position: "absolute", top: 15, right: 20 }}>
        <ColorPill
          active={color}
          color="white"
          onClick={() => setColor("white")}
        />
        <ColorPill
          active={color}
          color="yellow"
          onClick={() => setColor("yellow")}
        />
        <ColorPill active={color} color="red" onClick={() => setColor("red")} />
        <ColorPill
          active={color}
          color="purple"
          onClick={() => setColor("purple")}
        />
        <ColorPill
          active={color}
          color="blue"
          onClick={() => setColor("blue")}
        />
      </Box>
      <Flex
        style={{ display: "inline-block" }}
        flexDirection={"column"}
        pt={3}
        pl={2}
      >
        <SizeText active={size} size={"sm"} onClick={() => setSize("sm")}>
          small
        </SizeText>
        <SizeText active={size} size={"md"} onClick={() => setSize("md")}>
          medium
        </SizeText>
        <SizeText active={size} size={"lg"}  onClick={() => setSize("lg")}>
          large
        </SizeText>
      </Flex>
    </>
  );
}

export default DSFlexibleComponent;