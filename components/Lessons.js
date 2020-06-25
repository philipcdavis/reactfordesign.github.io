import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'rebass/styled-components'
import LessonCards from './LessonCards'
import Instructor from "./Instructor";


const LessonContainer = styled(Box)`
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
`

const Lessons = function(props) {
  return (
    <LessonContainer pt={[4,5]} mb={5}>
      <Box sx={{maxWidth: 700}}mt={4} >
        <Heading color="white" mb={2} fontSize={[4,5]}>Lessons made for designers</Heading>
        <Text>There are plenty of great ways to learn React. This course is focused on the parts of React that are most useful for designers. I've worked hard to create lessons that are laser focused to this end. Below is the list of videos that are currently available and a those that are still in the works.</Text>
      </Box>
      <LessonCards />

      <Instructor />
    </LessonContainer>
  )
}

export default Lessons;
