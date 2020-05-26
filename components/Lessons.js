import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'rebass/styled-components'
import LessonCards from './LessonCards'


const LessonContainer = styled(Box)`
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
`

const Lessons = function(props) {
  return (
    <LessonContainer pt={[4,5]} mb={5}>
      <Box mt={4}>
        <Heading color="white" mb={2} fontSize={[4,5]}>Use React for Design Work</Heading>
        <Text>This course is focused on teaching the parts of React.js that you need as a designer. Below is the list of videos that are currently available and a few that are still in the works. It's an ongoing course, so more lessons will be added in the future.</Text>
      </Box>
      <LessonCards />
    </LessonContainer>
  )
}

export default Lessons;
