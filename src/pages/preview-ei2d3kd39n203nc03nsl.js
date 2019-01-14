import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import { BtnRainbow } from '../components/Button'
import { Text, Box, Heading, Flex, Link } from 'rebass'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GlobalStyle, color } from '../Tile'

const Preview = () => (
  <Layout>
    <GlobalStyle />
    <Box px={[3,6]} py={[3,5]}>
      <Nav />
      <Heading align={["right","center"]} mt={5} fontSize={[3,4]} color="white">Designing with Realistic Data Sets</Heading>
      <Box
        width={1}
        mt={4}
        css={{
          height: 0,
          paddingBottom: (900 / 16) + '%',
          position: 'relative',
          overflow: 'hidden',
          '& > iframe': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            border: 0
          }
        }}>
        <iframe
          width='560'
          height='315'
          src='https://player.vimeo.com/video/311157677'
          frameBorder='0'
          allowFullScreen
        />
      </Box>

      <Box align={["right","center"]}>
        <Text fontSize={3} mt={5} mb={3}>If you like this video, you'll probably like the full course.</Text>
        <BtnRainbow as={OutboundLink} href="https://gumroad.com/l/reactfordesign" target="_blank">Get the Full Course</BtnRainbow>
      </Box>
    </Box>
  </Layout>
)

export default Preview
