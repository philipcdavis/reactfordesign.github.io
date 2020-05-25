import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { GlobalStyle } from '../Tile'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import PurchaseCard from '../components/PurchaseCard'
import Lessons from '../components/Lessons'
import FAQ from '../components/FreqAskedQuestions'
import Footer from '../components/Footer'
import CodeAnimation from '../components/CodeAnimation'
import { RainbowHr } from '../components/Text'
import { Box } from 'rebass/styled-components'

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <SEO />
      <Box>
        <CodeAnimation />
        <Box px={[3,3,6]} py={[5,5]}>
          <Nav />
          <Intro />
        </Box>
        <RainbowHr />
        <Box px={[3,3,6]} pb={[4,5]}>
          <Lessons />
        </Box>
        <Box px={[3,3,6]} pb={[4,5]}>
          <PurchaseCard />
          <FAQ />
        </Box>
        <RainbowHr />
        <Box px={[3,3,6]} py={[3,4]}>
          <Footer />
        </Box>
      </Box>
    </Layout>
  </React.Fragment>
)

export default IndexPage
