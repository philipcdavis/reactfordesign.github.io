import React from 'react'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Box, Flex } from 'rebass'

const Nav = () => (
  <Flex pb={2} alignItems="flex-start">
    <Logo flex={1} width="58px" display='block' />
    <Box mt={2}>
      <BtnRainbow as={OutboundLink} href="https://gumroad.com/l/reactfordesign" target="_blank">Purchase</BtnRainbow>
    </Box>
  </Flex>
)

export default Nav;
