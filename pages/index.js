import React from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../src/Tile'
import Nav from '../src/components/Nav'
import Intro from '../src/components/Intro'
import PurchaseCard from '../src/components/PurchaseCard'
import Lessons from '../src/components/Lessons'
import FAQ from '../src/components/FreqAskedQuestions'
import Footer from '../src/components/Footer'
import CodeAnimation from '../src/components/CodeAnimation'
import { RainbowHr } from '../src/components/Text'
import { Box } from 'rebass/styled-components'


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Chivo:400,700"
          rel="stylesheet"
        />
        <title>React for Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
    
  )
}
