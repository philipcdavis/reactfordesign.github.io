import React from 'react'
import { Text, Box, Flex, Link, Heading } from 'rebass/styled-components'

const FAQ = function(props) {
  return (
    <Box sx={{
      maxWidth: "50em",
      margin: "0 auto"
    }} pt={[3,5]}>
      <Heading mt={[5]} mb={-3} fontSize={[2,3]} sx={{
        textTransform: "uppercase",
      }}>
        Frequently Asked Questions
      </Heading>
      <Flex flexWrap="wrap" mb={[4,5]}>
        <Box pr={[0,0,0,4]} width={[1,1,1,1/2]}>
          <Heading fontSize={[2,3]} color="white" mt={[4,5]} mb={2}>How much development experience do I need?</Heading>
          <Text fontSize={[2,"17px"]}>
            Less than you might think. You need a baseline understanding of JavaScript, CSS, and HTML.
            <br />

            If you've never used React before I wrote a longer <Link color="inherit" href="https://philipcdavis.com/react-is-for-designers/">article</Link> about getting started.

            <br />
            Once you’ve scaffolded something with create-react-app and poked around a bit you should be able to start this course.
          </Text>

          <Heading fontSize={[2,3]} color="white" mt={[4,5]} mb={2}>How many lessons will there be in total?</Heading>
          <Text fontSize={[2,"17px"]}>
            This is an ongoing course. There are more lessons in the pipeline. The only lessons that are completed or in progress are the ones listed above.
            The pricing will be going up as more videos are released.
            <br />
            <br />
            If you have a good idea for something you'd like to learn send me a message on <Link color="inherit" href="https://twitter.com/philipcdavis">twitter</Link>.
          </Text>
        </Box>

        <Box pl={[0,0,0,4]} width={[1,1,1,1/2]}>
          <Heading fontSize={[2,3]} color="white" mt={[4,5]} mb={2}>Why React instead of other JS frameworks?</Heading>
          <Text fontSize={[2,"17px"]}>
            There are lots of excellent JS libraries available. If you are currently learning or using one of these libraries I don't think you need to switch.
            <br />
            React was the first development tool that I felt productive with as a designer. I recommend React over other JavaScript libraries for the following reasons:
            <br />
            <br />
            1. Maturity
            <br />
            2. Adoption
            <br />
            3. Ecosystem
            <br />
            4. Framer X

          </Text>

          <Heading fontSize={[2,3]} color="white" mt={[4,5]} mb={2}>I've never used React, where should I start?</Heading>
          <Text fontSize={[2,"17px"]}>
          I wrote an <Link color="inherit" href="https://philipcdavis.com/react-is-for-designers/">article</Link> with my two cents. The tldr is:
          <br />
          1. Scaffold a project using <Link color="inherit" href="https://github.com/facebook/create-react-app/">create-react-app</Link> and build something simple.
          <br />
          2. Read the React docs all the way through.
          </Text>

        </Box>

      </Flex>
        <Text color="white" textAlign={["left", "center"]} mt="4">Have a different question? <Link color="white" href="https://twitter.com/philipcdavis">Let me know</Link></Text>

    </Box>
  )
};

export default FAQ;
