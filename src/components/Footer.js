import React from 'react'
import { Text, Heading, Box, Flex, Link } from 'rebass'

const Footer = function(props) {
  return (
    <Flex mt={[4,6]} flexWrap="wrap">
      <Box width={[1,, 1/2]}>
        <Text fontSize={[2,3]}>
          Get in Contact:
          <Link color="white" ml={3} href="mailto:reactfordesign@gmail.com?subject=Question for you...">Email</Link>
          <Link color="white" ml={3} href="https://twitter.com/philipcdavis">Twitter</Link>
        </Text>
      </Box>

      <Box width={[1,, 1/2]}>
        <Text textAlign={["left",, "right"]} fontSize={[2,3]}>Created by Philip Davis</Text>
      </Box>

    </Flex>
  )
};

export default Footer;
