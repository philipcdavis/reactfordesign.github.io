import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'rebass'
import ProgressList from '../components/ProgressList'
import DesignSystemImage from '../images/design-system.png'

const Videos = function(props) {
  return (
    <Container pt={[4,5]}>
      <Box px={[3,6]} mt={4} width={["100%", "850px"]}>
        <Heading color="white" mb={2} fontSize={[4,5]}>Use React for Design Work</Heading>
        <Text>This course is focused on teaching the parts of React.js that you need as a designer. Below is the list of videos that are currently available and a few that are still in the works. It's an ongoing course, so more lessons will be added in the future.</Text>
        <ProgressList my={5}/>
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  background-image: url(${DesignSystemImage});
  background-position: 90% 100%;
  background-size: 900px;
  background-repeat: no-repeat;
  max-width: 70em;
  margin: 0 auto;

  @media(max-width: 1090px){
    background: none;
  }

  @media(max-width: 1400px){
    background-position: calc(100% + 300px) 100%;
  }
`

export default Videos;
