import React from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { Box, Text, Button, Flex } from 'rebass'
import { colorChange } from '../components/Utils'

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
        <ListItem active >
          {`Building a Design System, Part 1: Reusable Components`}
          <NewBadge />
        </ListItem>
        <ListItem>{`Building a Design System, Part 2: Organization & Extension`}</ListItem>
        <Text color="white" >More Coming...</Text>
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

const NewBadge = styled(Button)`
  font-size: 14px;
  background-color: ${color.gray3};
  color: white;
  padding: 4px 9px;
  border-radius: 20px;
  margin-left: 10px;
  animation: ${colorChange("color")} 10s infinite alternate;
`;

const StatusCircle = styled.div`
  height: 8px;
  width: 8px;
  min-width: 8px;
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
