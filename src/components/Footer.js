import React from 'react'
import { Text, Heading, Box, Flex, Link } from 'rebass'

const Footer = function(props) {
  return (
    <Flex mt={6}>
      <Box width={[1/2]}>
        <Text fontSize={3}>
          Get in Contact:
          <Link color="white" ml={3} href="mailto:reactfordesign@gmail.com?subject=Question for you...">Email</Link>
          <Link color="white" ml={3} href="https://twitter.com/philipcdavis">Twitter</Link>
        </Text>
      </Box>

      <Box width={[1/2]}>
        <Text textAlign="right" fontSize={3}>Created by Philip Davis</Text>
      </Box>

    </Flex>
  )
};

export default Footer;
