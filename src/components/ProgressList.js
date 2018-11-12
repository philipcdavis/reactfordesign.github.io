import React from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { Box, Text, Button, Flex } from 'rebass'

const ProgressList = function(props) {
  let { ...rest } = props;
  return (
    <Box { ...rest }>
      <Badge bg={color.green}>Available</Badge>
      <Badge bg={color.yellow}>In Progress</Badge>
      <Box fontSize={[16, 18]}>
        <ListItem  active>{`Building a Simple Component`}</ListItem>
        <ListItem active>{`Designing with Realistic Data Sets`}</ListItem>
        <ListItem active>{`Styling with Javascript`}</ListItem>
        <ListItem active>{`Creating an Icon Component Library`}</ListItem>
        <ListItem>{`Building a Design System, Part 1: Reusable Components`}</ListItem>
        <ListItem>{`Building a Design System, Part 2: Orginization & Extension`}</ListItem>
        <Text color={color.gray1} >More Coming...</Text>
      </Box>
    </Box>
  )
};

const Badge = styled(Button)`
  font-size: 12px;
  text-transform: uppercase;
  color: black;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  padding: 5px 10px;
  margin-right: 10px;
`;

const StatusCircle = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 16px;
  display: inline-block;
  margin-right: 14px;
  position: relative;
  top: 7px;
  background-color: ${props => props.active ? color.green : color.yellow};
`;

const Item = styled(Flex)`
  margin: 15px 0;
`;

const ItemDescription = styled.div`
  font-weight: bold;
  color: ${props => props.active ? color.white : 'default'};
`

const ListItem = function(props) {
  return (
    <Item>
      <StatusCircle active={props.active} />
      <ItemDescription active={props.active}>{props.children}</ItemDescription>
    </Item>
  )
}

export default ProgressList;
