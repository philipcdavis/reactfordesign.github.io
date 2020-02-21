import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout'
import { GlobalStyle, color, fontSize } from '../Tile'
import { Box, Flex, Text, Link } from 'rebass/styled-components'
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
    <Box>
      <GlobalStyle />
      <Layout>
        <Flex minHeight={"100vh"} flexDirection={"column"}>
          <Nav>
            <Flex justifyContent="space-between">
              <Box px={[3,4,4,6]} flexGrow={1} pt={4}>
                <Logo width={50} />
              </Box>
              <Box px={[3,4,4,6]} pt={"40px"}>
                <BtnRainbow size={"sm"}>React for Design</BtnRainbow>
              </Box>
            </Flex>
            <Box px={[3,4,4,6]} sx={{position: "relative", top: [0, "-55px"]}} mt={[4, 0]} display={"inline-block"} ml={[0 ,"75px"]}>
              <Text lineHeight={1.2} fontSize={[3,18]} color={"white"}>React Links for Designers</Text>
              <Text lineHeight={1.2} fontSize={[3,18]} color={color["gray1"]} >Free, curated resources</Text>
            </Box>

            <Box textAlign={"left"} px={[3,4,4,6]} ml={-3} mt={4} mb={3}>
              <Box display="inline-block" width={["50%", "auto"]}>
                <Tag my={[1,0]} mx={[2, 0]} px={["10px","17px"]} py={["2px","3px"]} fontSize={[1,2]} name="getting-started" filter={filter} onClick={() => toggleFilter("getting-started")} color="green">#getting-started</Tag>
              </Box>
              <Box display="inline-block" width={["50%", "auto"]}>
                <Tag my={[1,0]} mx={[2, 2]} px={["10px","17px"]} py={["1px","3px"]} fontSize={[1,2]} name="library" filter={filter} onClick={() => toggleFilter("library")} color="blue">#library</Tag>
              </Box>
              <Box display="inline-block" width={["50%", "auto"]}>
                <Tag my={[1,0]} mx={[2, 0]} px={["10px","17px"]} py={["1px","3px"]} fontSize={[1,2]} name="article" filter={filter} onClick={() => toggleFilter("article")} color="purple">#article</Tag>
              </Box>
              <Box display="inline-block" width={["50%", "auto"]}>
                <Tag my={[1,0]} mx={[2, 2]} px={["10px","17px"]} py={["1px","3px"]} fontSize={[1,2]} name="video" filter={filter} onClick={() => toggleFilter("video")} color="red">#video</Tag>
              </Box>
            </Box>
          </Nav>

          <Box flexGrow={1} width={"100%"} px={[3,4,4,6]} ml={-3} pt={3}>

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
                      py={["12px"]}
                      href={url}
                      width={["100%", "auto"]}
                    >
                      <StatusContainer>
                        {tags.map((tag, i) => <Status id={i} key={i} kind={tag} /> )}
                      </StatusContainer>

                      <Title fontSize={[2,3]} >{title}</Title>

                      <Url color={color.gray1} fontSize={[1,2]}>{ getHostName(url) }</Url>


                    </ResourceCard>
                  </Box>
                )
            })}
          </Box>

          <Footer px={6} py={4} mt={4}>
            <Text fontSize={2}>
            Made by <Link sx={{textDecoration: 'none'}}color={color['white']} href="https://twitter.com/philipcdavis">@philipcdavis</Link>
            </Text>
          </Footer>
        </Flex>
      </Layout>
    </Box>
  )
}

const Footer = styled(Box)`
  opacity: 0.5;
  border-top: 2px solid ${color.gray2};
`

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
    background-color: rgba(255,255,255,0.04);
  }
  line-height: 1;
  margin-bottom: 0px;
  padding-left: 40px;
  padding-right: 30px;
`

const Nav = styled(Box)`
  border-bottom: 2px solid ${color.gray3};
`;

const Tag = styled(Link)`
  user-select: none;
  display: inline-block;
  font-weight: bold;
  color: ${props => props.filter === props.name ? color.black : color[props.color]};
  background-color: ${props => props.filter === props.name ? color[props.color] : "transparent"};
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.15s transform ease-in;

  &:hover {
    border-color: ${props => props.filter === props.name ? "transparent" : color.gray3};
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
