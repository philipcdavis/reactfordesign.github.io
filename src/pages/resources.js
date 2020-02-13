import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout'
import { GlobalStyle, color, fontSize } from '../Tile'
import { Box, Flex, Text, Link } from 'rebass'
import CodeAnimation from '../components/CodeAnimation'
import PostFooter from '../templates/PostFooter'
import Intro from '../components/Intro'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import data from '../../static/data/resources'

export default function Free() {
  const [filter, setFilter] = useState();
  const toggleFilter = label => {
    if (filter === label) {
      setFilter(null)
    } else {
      setFilter(label)
    }
  }
  return (
    <div>
      <GlobalStyle />
      <Layout>

        <Box mt={5} ml={"60px"}>
          <Tag active={filter === "getting-started" ? 1 : 0} onClick={() => toggleFilter("getting-started")} color="green">#getting-started</Tag>
          <Tag active={filter === "library" ? 1 : 0} onClick={() => toggleFilter("library")} color="blue">#library</Tag>
          <Tag active={filter === "article" ? 1 : 0} onClick={() => toggleFilter("article")} color="purple">#article</Tag>
          <Tag active={filter === "video" ? 1 : 0} onClick={() => toggleFilter("video")} color="red">#video</Tag>
        </Box>
        <Box width={["600px"]} pt={5}>
          {
            data.map(function(resource, i) {
              const title = resource.title;
              const description = resource.description;
              const url = resource.url;
              const tags = resource.tags;
              console.log(tags)

              return (
                <ResourceCard
                  key={i}
                  px={4}
                  py={3}
                  href="https://react.design"
                >
                  {tags.map((tag, i) => <Status tag={tag} key={i} /> )}

                  <Text fontSize={3}>{title}</Text>
                  <Text color={color.gray1} fontSize={1}>{getHostName(url)}</Text>
                </ResourceCard>
              )
          })}
        </Box>

      </Layout>
    </div>
  )
}


const Status = styled(Box)`
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background-color: red;
`

const ResourceCard = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  transition: 0.1s border-color ease-in;
  width: 100%;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
`

const Nav = styled(Flex)`
  border-bottom: 2px solid ${color.gray3};
  padding: 15px 20px;
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${color.black};
`;

const NavLogo = styled(Logo)`
  position: absolute;
  top: 13px;
  left: 20px;
`;

const Tag = styled(Link)`
  user-select: none;
  display: inline-block;
  font-weight: bold;
  font-size: ${fontSize[1]};
  color: ${props => props.active ? color.black : color[props.color]};
  background-color: ${props => props.active ? color[props.color] : "transparent"};
  padding: 3px 17px;
  margin-right: 10px;
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.15s transform ease-in;

  &:hover {
    border-color: ${props => props.active ? "transparent" : color.gray3};
  }
`;

function getHostName(url) {
  if (url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
  }
}

// https://spreadsheets.google.com/feeds/list/1Fxjkqg_Bc_76fvvuiErt6O3RUebzg4VrIVYtOz_cosE/od6/public/values?alt=json
