import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout'
import { GlobalStyle, color, fontSize } from '../Tile'
import { Box, Flex, Text, Link } from 'rebass'
import CodeAnimation from '../components/CodeAnimation'
import PostFooter from '../templates/PostFooter'
import Logo from '../components/Logo'
import { BtnRainbow } from '../components/Button'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import data from '../../static/data/resources'

const tagColor = {
  "getting-started": "green",
  "library": "blue",
  "article": "purple",
  "video": "red",
}

export default function Free() {
  const [filter, setFilter] = useState();
  const toggleFilter = label => {
    if (filter === label) {
      setFilter(null)
    } else {
      setFilter(label)
    }
  }


  const filteredData = data.filter( function (resource) {
    return filter ? resource.tags.includes(filter) : resource;
  });

  return (
    <div>
      <GlobalStyle />
      <Layout>

        <Box width={["700px"]} mx="auto" mt={5}>
          <Tag name="getting-started" filter={filter} onClick={() => toggleFilter("getting-started")} color="green">#getting-started</Tag>
          <Tag name="library" filter={filter} onClick={() => toggleFilter("library")} color="blue">#library</Tag>
          <Tag name="article" filter={filter} onClick={() => toggleFilter("article")} color="purple">#article</Tag>
          <Tag name="video" filter={filter} onClick={() => toggleFilter("video")} color="red">#video</Tag>
        </Box>

        <Box width={["700px"]} mx="auto" pt={5}>

          {
            filteredData.map(function(resource, i) {
              const title = resource.title;
              const description = resource.description;
              const url = resource.url;
              const tags = resource.tags;

              return (
                <Box key={i}>
                  <ResourceCard
                    key={i}
                    py={3}
                    href={url}
                  >
                    <StatusContainer>
                      {tags.map((tag, i) => <Status id={i} key={i} kind={tag} /> )}
                    </StatusContainer>

                    <Title fontSize={3} >{title}</Title>
                    <Url display='inline-block' color={color.gray1} fontSize={2}>{ getHostName(url) }</Url>

                  </ResourceCard>
                </Box>
              )
          })}
        </Box>

      </Layout>
    </div>
  )
}

const StatusContainer = styled(Box)`
  position: relative;
`

const Status = styled(Box)`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${ props => color[tagColor[props.kind]]} ;
  position: absolute;
  left: ${props => (props.id * -8) - 20}px;
  border: 2px solid ${color.black};
  top: 5px;
`

const Url = styled(Text)`
  display: inline-block;
`

const Title = styled(Text)`
  display: inline-block;
  margin-right: 7px;
`

const ResourceCard = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  transition: 0.1s border-color ease-in;
  &:hover {
    background-color: rgba(255,255,255,0.02);
  }
  line-height: 1;
  margin-bottom: 10px;
  padding-left: 40px;
  padding-right: 30px;
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
  color: ${props => props.filter === props.name ? color.black : color[props.color]};
  background-color: ${props => props.filter === props.name ? color[props.color] : "transparent"};
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
