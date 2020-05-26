import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass/styled-components'
import { color } from './Tile'
import SimpleComponent from './Lessons/SimpleComponent'
import DesigningWithData from './Lessons/DesigningWithData'
import StylingInJavascript from './Lessons/StylingInJavascript'
import IconComponentLibrary from './Lessons/IconComponentLibrary'


const LessonCardContainer = styled(Box)`
  height: 260px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const LessonCard = styled(Box)`
  background-color: ${color.gray3};
  border-radius: 12px;
  height: 100%;
  position: relative;
`

const LessonText = styled(Text)`
  font-size: 17px;
  color: ${color.white};
  margin-left: 10px;
`

const LessonCards = function(props) {
  return (
      <Flex flexWrap='wrap' mx={"auto"} mt={5}>
        <LessonCardContainer px={3} width={[1,1/2,1/3]}>
          <LessonCard>
            <SimpleComponent />
          </LessonCard>
          <LessonText mt={3}>Building a Simple Component</LessonText>
        </LessonCardContainer>
        <LessonCardContainer px={3} width={[1,1/2,1/3]}>
          <LessonCard>
            <DesigningWithData />
          </LessonCard>
          <LessonText mt={3}>Designing with Realistic Data</LessonText>
        </LessonCardContainer>
        <LessonCardContainer px={3} width={[1, 1 / 2, 1 / 3]}>
          <LessonCard>
            <IconComponentLibrary />
          </LessonCard>
          <LessonText mt={3}>Styling in JavaScript</LessonText>
        </LessonCardContainer>
        <LessonCardContainer px={3} width={[1,1/2,1/3]}>
          <LessonCard style={{backgroundColor: "transparent"}}>
            <StylingInJavascript />
          </LessonCard>
          <LessonText mt={3}>Styling in JavaScript</LessonText>
        </LessonCardContainer>
       
      </Flex>
  )
}

export default LessonCards;
