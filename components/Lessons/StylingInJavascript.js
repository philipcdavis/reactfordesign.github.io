import React, { useState} from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { hexToRGB } from '../Utils'
import { Box } from 'rebass/styled-components'
import RangeInput from '../RangeInput'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid 
    ${props => color[props.inputColor] ? color[props.inputColor] : color.gray2};
  box-shadow: 0px 0px 20px  ${props => color[props.inputShadowColor] ? hexToRGB(color[props.inputShadowColor], 0.3) : color.gray2};
  border-radius: ${props => props.radius}px;
  background-color: ${color.gray3};
`;

const Code = styled(Box)`
  color: ${color.gray1};
  font-size: 14px;
  font-family: menlo, monospace;
  text-align: center;
`;

const Invisinput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  display: inline;
  font-size: 16px;
  font-family: menlo;
  min-width: 1ch;
  width: calc(${props => props.inputColor.length}ch + 2px);
  color: ${props => color[props.inputColor] ? color[props.inputColor] : color.white};

  &::selection {
    background: ${props => color[props.inputColor] ? hexToRGB(color[props.inputColor], 0.2) : color.black};
  }
`


const StylingInJavascript = () => {
  const [radius, setRadius] = useState(12);
  const [inputColor, setInputColor] = useState("purple");
  const [inputShadowColor, setInputShadowColor] = useState("purple");
  const handleSlide = e => {
    setRadius(e.target.value)
  }

  const handleColor = e => {
    setInputColor(e.target.value)
  }

  const handleShadowColor = e => {
    setInputShadowColor(e.target.value)
  }

  return (
    <Container inputColor={inputColor} inputShadowColor={inputShadowColor} radius={radius}>
      <Code p={2}>
        <Box mt={4}>
          <Box>
            {"border-color"}
          </Box>
          <Box fontSize={"16px"} color={color.gray0}>
            {"${color."}
            <Invisinput inputColor={inputColor} type="text" value={inputColor} onChange={handleColor} />
            {"}"}
          </Box>
        </Box>
        <Box mt={3}>
          <Box>
            {"box-shadow"}
          </Box>
          <Box fontSize={"16px"} color={color.gray0}>
            {"${color."}
            <Invisinput inputColor={inputShadowColor} type="text" value={inputShadowColor} onChange={handleShadowColor} />
            {"}"}
          </Box>
        </Box>
        <Box mt={3}>
          <Box>
            {`border-radius: ${radius}px` }
          </Box>
          <Box mt={1}>
            <RangeInput type="range" min={0} max={24} value={radius} onChange={handleSlide} />
          </Box>
        </Box>
      </Code>
    </Container>
  )
}


export default StylingInJavascript;