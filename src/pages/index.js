import React from 'react'
import Logo from '../components/Logo'
import Layout from '../components/layout'
import { GlobalStyle, color } from '../Tile'
import ProgressList from '../components/ProgressList'
import PurchaseCard from '../components/PurchaseCard'
import SignupForm from '../components/SignupForm'
import { BtnRainbow } from '../components/Button'
import { P } from '../components/Text'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Text, Heading, Box, Flex } from 'rebass'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-51640724-1')
ReactGA.pageview(window.location.pathname + window.location.search)


const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <Box px={6} py={5}>
        <Flex pb={2} alignItems="flex-start">
          <Logo flex={1} width="58px" display='block' />
          <Box mt={2}>
            <BtnRainbow as={OutboundLink} href="https://gumroad.com/l/reactfordesign" target="_blank">Purchase</BtnRainbow>
          </Box>
        </Flex>
        <Box width={["92%", "600px"]} mt={5} mx="auto">
          <Heading color="white" mb="30px" align="center" fontSize={[4,5]}>React is for Designers</Heading>
          <P> {`
              React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg.
            `}
          </P>

          <P>{`
            React opens up new ways of designing interfaces and the systems that support them. If you're interested in using React for design work but not sure where to start, I made this course for you.
          `}</P>
          <Box p={3} mb={6} mx="auto" width={[1, "500px"]}>
            <Heading color="white" fontSize={3} mb={3} align="center">Try out a lesson for free</Heading>
            <SignupForm />
          </Box>
        </Box>

        <ProgressList my={5}/>
        <PurchaseCard />
      </Box>

    </Layout>
  </React.Fragment>
)

export default IndexPage
