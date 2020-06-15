import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass/styled-components'
import { color } from './Tile'
import SimpleComponent from './Lessons/SimpleComponent'
import DesigningWithData from './Lessons/DesigningWithData'
import StylingInJavascript from './Lessons/StylingInJavascript'
import IconComponentLibrary from './Lessons/IconComponentLibrary'
import DSFlexibleComponent from './Lessons/DSFlexibleComponent'


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

const breakpoints = [1, 1/2, 1/2, 1/3];

const LessonCards = function(props) {
  return (
    <Flex flexWrap="wrap" mx={-3} mt={5}>
      <LessonCardContainer px={3} width={breakpoints}>
        <LessonCard>
          <SimpleComponent />
        </LessonCard>
        <LessonText mt={3}>Building a Simple Component</LessonText>
      </LessonCardContainer>
      <LessonCardContainer px={3} width={breakpoints}>
        <LessonCard>
          <DesigningWithData />
        </LessonCard>
        <LessonText mt={3}>Designing with Realistic Data</LessonText>
      </LessonCardContainer>
      <LessonCardContainer px={3} width={breakpoints}>
        <LessonCard style={{ backgroundColor: "transparent" }}>
          <StylingInJavascript />
        </LessonCard>
        <LessonText mt={3}>Styling in JavaScript</LessonText>
      </LessonCardContainer>
      <LessonCardContainer px={3} width={breakpoints}>
        <LessonCard>
          <IconComponentLibrary />
        </LessonCard>
        <LessonText mt={3}>Building an Icon Library</LessonText>
      </LessonCardContainer>
      <LessonCardContainer px={3} width={breakpoints}>
        <LessonCard>
          <DSFlexibleComponent />
        </LessonCard>
        <LessonText mt={3}>
          Building a Design System Part 1:
          <div>Flexible Components</div>
        </LessonText>
      </LessonCardContainer>
    </Flex>
  );
}

export default LessonCards;
