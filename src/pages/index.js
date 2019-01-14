import React from 'react'
import Layout from '../components/layout'
import { GlobalStyle, color } from '../Tile'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import ProgressList from '../components/ProgressList'
import PurchaseCard from '../components/PurchaseCard'
import Videos from '../components/Videos'
import Footer from '../components/Footer'
import { BtnRainbow } from '../components/Button'
import { P, RainbowHr } from '../components/Text'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Text, Heading, Box, Flex } from 'rebass'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-51640724-1')
ReactGA.pageview(window.location.pathname + window.location.search)


const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <Box>
        <Box px={[3,,6]} py={[4,5]}>
          <Nav />
          <Intro />
        </Box>
        <RainbowHr />
        <Videos />
        <Box px={[3,,6]} py={[4,5]}>
          <PurchaseCard />
          <Footer />
        </Box>
      </Box>
    </Layout>
  </React.Fragment>
)

export default IndexPage
