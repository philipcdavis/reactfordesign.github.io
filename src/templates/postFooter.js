import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Heading, Text } from 'rebass'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { RainbowHr } from '../components/Text'

const PostFooter = function(props) {
  return (
    <Box textAlign="center" mt={[4,5]}>
      <RainbowHr width="70%"/>
      <Flex flexWrap="wrap" mt={[4,5]} mb={[4,5]}>
        <Box mx="auto" width={["100%", "70%"]}>
          <Logo width="60px" />
          <Heading fontSize={3} color="white">A React Course for Designers</Heading>
          <Text mt="15px" mb="25px" fontSize={2}>React is a powerful design tool. If you're interested in using React for design work I made a course for you.</Text>
          <BtnRainbow href="https://react.design">React for Design</BtnRainbow>
        </Box>
      </Flex>

    </Box>
  )
};

export default PostFooter;
