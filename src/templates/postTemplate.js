import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle, color } from '../Tile'
import { Box } from 'rebass'
import { Markdown, RainbowHeading } from '../components/Text'
import CodeAnimation from '../components/CodeAnimation'
import PostFooter from './PostFooter'

import "./syntax-highlight.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  return (
    <React.Fragment>
      <GlobalStyle />
      <Box>
      <CodeAnimation />
        <Box px={[3,3,6]} py={[5,5]}>
          {frontmatter.title && (
            <RainbowHeading textAlign="center">{frontmatter.title}</RainbowHeading>
          )}
          <Box color={color.gray0} width={["100%", "600px"]} mx="auto">
            <Markdown
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
          <PostFooter />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
