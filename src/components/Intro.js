import React from 'react'
import { P } from '../components/Text'
import { Heading, Box } from 'rebass'
import SignupForm from '../components/SignupForm'

const Intro = () => (
  <Box width={["92%", "600px"]} mt={5} mx="auto">
    <Heading color="white" mb="30px" align="center" fontSize={[4,5]}>React is for Designers</Heading>
    <P> {`
        React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg.
      `}
    </P>

    <P>{`
      React opens up new ways of designing interfaces and the systems that support them. If you're interested in using React for design work but not sure where to start, I made this course for you.
    `}</P>
    <Box p={3} mb={4} mx="auto" width={[1, "500px"]}>
      <Heading color="white" fontSize={3} mb={3} align="center">Try out a lesson for free</Heading>
      <SignupForm />
    </Box>
  </Box>
)

export default Intro;
