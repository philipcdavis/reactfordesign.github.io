import React from "react"
import styled, { css } from 'styled-components';
import Layout from '../components/layout'
import { GlobalStyle, color, fontSize } from '../Tile'
import { Box, Flex, Link } from 'rebass'
import CodeAnimation from '../components/CodeAnimation'
import PostFooter from '../templates/PostFooter'
import Intro from '../components/Intro'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default function Free() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Nav
          px={3}
          alignItems="center"
        >
          <Logo width="40px" />
          <Box flex={1}>
            <Tag color="green">#getting-started</Tag>
            <Tag color="blue">#library</Tag>
            <Tag active color="purple">#article</Tag>
            <Tag color="red">#video</Tag>
          </Box>
          <Box>
            <BtnRainbow size="sm" as={OutboundLink} href="https://gumroad.com/l/reactfordesign" target="_blank">React for Design</BtnRainbow>
          </Box>
        </Nav>
      </Layout>
    </div>
  )
}

const Nav = styled(Flex)`
  height: 70px;
`;

const Tag = styled(Link)`
  font-weight: bold;
  font-size: ${fontSize[1]};
  color: ${props => props.active ? color.black : color[props.color]};
  background-color: ${props => props.active ? color[props.color] : "transparent"};
  height: 100px;
  padding: 6px 17px;
  margin-left: 10px;
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.15s all ease-out;

  &:hover {
    border-color: ${props => props.active ? "transparent" : color.gray3};
  }
`;
