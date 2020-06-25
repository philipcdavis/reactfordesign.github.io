import React, { useState } from "react";
import { Box, Flex, Text } from 'rebass/styled-components'
import { color } from '../Tile'
import { BtnLink } from '../Button'
import styled, { css } from "styled-components";

const Button = styled(BtnLink)`
  color: ${color.blue};
  margin-right: 0;
  transition: 0.14s all ease;
  ${props => props.px && css`
    padding-left: 70px;
    padding-right: 70px;
  `}
  line-height: 1;

  ${props => props.br && css`
    border-radius: 100px;

    &:hover {
      border-radius: 100px;
    }
  `}

  ${props => props.mt && css`
    margin-top: 51px;
  `}
`

const Controls = styled(Flex)`
  
`

const ToggleText = styled.div`
  font-family: menlo, 'Courier New', Courier, monospace;
  font-size: 13px;
  position: relative;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
  color: ${props => props.active ? color.white : color.gray1};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  user-select: none;

  &:hover {
    color: ${props => props.active ? color.white : color.gray0};
  }
`


const ComposingStyles = () => {
  const [px, setPx] = useState(false);
  const [mt, setMt] = useState(true);
  const [br, setBr] = useState(false);

  return (
    <Flex flexDirection="column" p={4} height="100%">
      <Flex mb={4} height={"99px"} width={"100%"} justifyContent="center">
        <Box>
          <Button href={"https://twitter.com/philipcdavis"} mt={mt} br={br} px={px} color="black">
            Follow
          </Button>
        </Box>
      </Flex>

      <Controls justifyContent="center">
        <Flex justifyContent="center" flexDirection="row">
          <ToggleText onClick={() => setPx(!px)} active={px}>{`px={4}`}</ToggleText>
          <ToggleText onClick={() => setMt(!mt)} active={mt}>{`mt={4}`}</ToggleText>
          <ToggleText onClick={() => setBr(!br)} active={br}>{`br={5}`}</ToggleText>
        </Flex>
      </Controls>
    </Flex>
  );
}

export default ComposingStyles;