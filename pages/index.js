import React from 'react'
import Head from '../components/Head'
import { GlobalStyle } from '../components/Tile'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import PurchaseCard from '../components/PurchaseCard'
import Lessons from '../components/Lessons'
import FAQ from '../components/FreqAskedQuestions'
import Footer from '../components/Footer'
import CodeAnimation from '../components/CodeAnimation'
import { RainbowHr } from '../components/Text'
import { Box } from 'rebass/styled-components'


export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="React for Design"
        description="A React Course for Designers. React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg."
      />
      <GlobalStyle />

      <Box>
        <CodeAnimation />
        <Box px={[3, 3, 6]} py={[5, 5]}>
          <Nav />
          <Intro />
        </Box>
        <RainbowHr />
        <Box px={[3, 3, 6]} pb={[4, 5]}>
          <Lessons />
        </Box>
        <Box px={[3, 3, 6]} pb={[4, 5]}>
          <PurchaseCard />
          <FAQ />
        </Box>
        <RainbowHr />
        <Box px={[3, 3, 6]} py={[3, 4]}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}
