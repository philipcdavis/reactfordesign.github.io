import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Flex, Image } from 'rebass'
import ProgressList from '../components/ProgressList'
import DesignSystemImage from '../images/design-system.png'

const Videos = function(props) {
  return (
    <FlexContainer px={6} py={5}>
      <Box mt={4} width={["580px"]}>
        <Heading color="white" fontSize={5}>Lessons for designers</Heading>
        <Text>Below is the list of videos that are currently available and a few that are still in the works. Purchasing the course now will get you access to all videos that are released in the future.</Text>
        <ProgressList my={5}/>
      </Box>

      <FloaterImage src={DesignSystemImage} alt="Image of Design Systems" />

    </FlexContainer>
  )
}

const FlexContainer = styled(Flex)`
  position: relative;
  overflow: hidden;
  max-width: 100%;
`

const FloaterImage = styled(Image)`
  position: absolute;
  right: -300px;
  top: 200px;
  width: 912px;
`

export default Videos;
