import React from 'react';
import Head from './Head';
import ReactMarkdown from 'react-markdown/with-html';
import { Heading, Text, Flex, Box } from 'rebass/styled-components';
import Logo from './Logo';
import { GlobalStyle, color } from "./Tile";
import { BtnRainbow } from './Button';
import { RainbowHr } from './Text';
import CodeAnimation from './CodeAnimation';
import { Markdown } from './Text';

const Post = function (props) {
  return (
    <>
      <Head
        title="A Designer’s Guide to the Terminal"
        description="You can learn how to use the terminal in a fairly short amount of time. You don’t need a C.S. degree. You don’t need to know how to hack any mainframes."
        image="https://react.design/social/terminal.png"
      />
      <GlobalStyle />
      <CodeAnimation />

      <Box px={[3, 3, 6]} py={[5, 5]}>
        <Box color={color.gray0} width={["100%", "600px"]} mx="auto">
          <Markdown>
            <ReactMarkdown escapeHtml={false} source={props.content} />
          </Markdown>

          <Box textAlign="center" mt={[4, 5]}>
            <RainbowHr width="70%" />
            <Flex flexWrap="wrap" mt={[4, 5]} mb={[4, 5]}>
              <Box mx="auto" width={["100%", "70%"]}>
                <Logo width="60px" />
                <Heading fontSize={3} color="white">
                  A React Course for Designers
                </Heading>
                <Text mt="15px" mb="25px" fontSize={2}>
                  React is a powerful design tool. If you're interested in using
                  React for design work I made a course for you.
                </Text>
                <BtnRainbow href="https://react.design">
                  React for Design
                </BtnRainbow>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Post;
