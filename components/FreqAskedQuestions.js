import React from 'react'
import { Text, Box, Flex, Link, Heading } from 'rebass/styled-components'

const FAQ = function(props) {
  return (
    <Box
      sx={{
        maxWidth: "50em",
        margin: "0 auto",
      }}
      pt={[3, 5]}
    >
      <Heading
        mt={[5]}
        mb={-3}
        fontSize={[2, 3]}
        sx={{
          textTransform: "uppercase",
        }}
      >
        Frequently Asked Questions
      </Heading>
      <Flex flexWrap="wrap" mb={[4, 5]}>
        <Box pr={[0, 0, 0, 4]} width={[1, 1, 1, 1 / 2]}>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            How much development experience do I need?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            Less than you might think. You need a small amount of JavaScript,
            CSS, and HTML. If you've never used React before I wrote a longer{" "}
            <Link
              color="inherit"
              href="https://philipcdavis.com/react-is-for-designers/"
            >
              article
            </Link>{" "}
            about getting started.
            <br />
            I would start by scaffolding an app. Once you've poked around a bit
            you should be able to start this course.
            <br />
            <br />
            If you aren't sure you know enough, I have good news. The React API
            is small. The more you work in React, the more web fundamentals
            you'll learn.
          </Text>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            I've never used React, where should I start?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            I wrote an{" "}
            <Link
              target="_blank"
              color="inherit"
              href="https://philipcdavis.com/react-is-for-designers/"
            >
              article
            </Link>{" "}
            with my two cents. The tldr is:
            <br />
            1. Scaffold a project using{" "}
            <Link
              target="_blank"
              color="inherit"
              href="https://github.com/facebook/create-react-app/"
            >
              create-react-app
            </Link>{" "}
            and build something simple.
            <br />
            2. Read the React docs all the way through.
          </Text>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Do you offer discounts?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            Not currently. If you're looking
            for free resources, I made a collection of {" "}
            <Link
              color="inherit"
              target="_blank"
              href="https://react.design/links"
            >free react links for designers</Link>.
          </Text>
        </Box>

        <Box pl={[0, 0, 0, 4]} width={[1, 1, 1, 1 / 2]}>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Why React instead of other JS frameworks?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            There are lots of excellent JS libraries available. If you are
            currently learning or using one of these libraries I don't think you
            need to switch. React was the first development tool that I felt
            productive with as a designer. I recommend React over other
            JavaScript libraries for the following reasons:
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

          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            What if I don't like the course?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            If you don't like the course let me know within 7 days of purchase
            and i'll send you a refund.
          </Text>

          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Will I need to use the terminal?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            I'd recommend learning a few basic commands on the terminal so that
            you scaffold a React app. I wrote a{" "}
            <Link
              color="inherit"
              target="_blank"
              href="https://react.design/terminal"
            >
              short guide
            </Link>
            that could be helpful.
          </Text>
        </Box>
      </Flex>
      <Text color="white" textAlign={["left", "center"]} mt="4">
        Have a different question?{" "}
        <Link
          color="white"
          target="_blank"
          href="https://twitter.com/philipcdavis"
        >
          Let me know
        </Link>
      </Text>
    </Box>
  );
};

export default FAQ;
