import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "rebass/styled-components";
import { color } from "../Tile";
import { hexToRGB } from "../../components/Utils";
import styled, { css } from "styled-components";

const data = [
  { first: "Merry", last: "Brandybuck", status: "Online" },
  { first: "Rosie", last: "Cotton", status: "Online" },
  { first: "Samwise", last: "Gamgee", status: "Offline" },
  { first: "Bilbo", last: "Baggins", status: "Online" },
  { first: "Frodo", last: "Baggins", status: "Offline" },
  { first: "Pippen", last: "Took", status: "Online" },
];

const Input = styled.input`
  border: none;
  outline: none;
  background-color: ${color.gray2};
  color: white;
  border-radius: 6px;
  padding: 6px 10px;
  width: 100%;
  max-width: 250px;
  margin-right: 28px;
  font-family: menlo, "Courier New", Courier, monospace;
  border: 2px solid transparent;

  &::placeholder {
    color: ${color.gray1};
  }

  &:focus {
    border-color: ${color.gray1};
  }
`;

const Container = styled.div`
  padding: 30px;
  font-size: 13px;
  font-family: menlo, "Courier New", Courier, monospace;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.isOnline ? hexToRGB(color.green, 0.1) : "transparent"};
  padding: 10px;
  border: 2px solid
    ${(props) => (props.isOnline ? hexToRGB(color.green, 0.7) : color.gray1)};
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  &:hover {
  }
`;

const Status = styled.div`
  border-radius: 10px;
  width: 7px;
  height: 7px;
  background-color: ${(props) =>
    props.active === "Online" ? color.green : color.gray2};

  ${(props) =>
    props.active === "Online" &&
    css`
      box-shadow: 0 0 8px ${color.green};
    `}
`;

const InteractiveComponents = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  return (
    <Container>
      <Flex>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
        />
        <Box flexGrow={1} />
        <FilterButton
          isOnline={isOnline}
          onClick={() => setIsOnline(!isOnline)}
        >
          <Status active="Online" />
        </FilterButton>
      </Flex>
      <Box mt={3}>
        {data
          .filter(
            (user) =>
              user.first.includes(inputValue) || user.last.includes(inputValue)
          )
          .filter((user) => (isOnline ? user.status === "Online" : true))
          .map((user) => (
            <Flex alignItems="center" my={2}>
              <Status active={user.status} />
              <Text opacity={0.5} ml={3}>
                {user.first} {user.last}
              </Text>
            </Flex>
          ))}
      </Box>
    </Container>
  );
};

export default InteractiveComponents;
