import React from 'react'
import { Flex, Box } from 'reflexbox'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { RainbowHr } from '../components/Text'
import { Btn, color } from '../Tile'
import Icon from '../Tile/Icon'

const PostFooter = function(props) {
  return (
    <Box textAlign="center" mt={[4,5]}>
      <RainbowHr width="70%"/>
      <Flex flexWrap="wrap" mt={[4,5]} mb={[4,5]}>
        <Box pl={[0,0,0,4]} width={[1,1,1,1/2]}>
          <Icon size={80} fill={color.blue} name="twitter" />
          <Btn color="gray3">Share on Twitter</Btn>
        </Box>

        <Box pr={[0,0,0,4]} width={[1,1,1,1/2]}>
          <Logo />
          <BtnRainbow>React for Design</BtnRainbow>
        </Box>
      </Flex>

    </Box>
  )
};

export default PostFooter;
