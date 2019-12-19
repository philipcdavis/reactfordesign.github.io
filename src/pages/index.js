import React from 'react'
import Layout from '../components/layout'
import { GlobalStyle } from '../Tile'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import PurchaseCard from '../components/PurchaseCard'
import Videos from '../components/Videos'
import FAQ from '../components/FreqAskedQuestions'
import Footer from '../components/Footer'
import CodeAnimation from '../components/CodeAnimation'
import { RainbowHr } from '../components/Text'
import { Box } from 'rebass'



const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <Box>
        <CodeAnimation />
        <Box px={[3,3,6]} py={[5,5]}>
          <Nav />
          <Intro />
        </Box>
        <RainbowHr />
        <Videos />
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
