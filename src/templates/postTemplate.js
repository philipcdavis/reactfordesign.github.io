import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle, color } from '../Tile'
import Nav from '../components/Nav'
import { Box } from 'rebass'
import Footer from '../components/Footer'
import { Markdown } from '../components/Text'
import "./syntax-highlight.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  return (
    <React.Fragment>
      <GlobalStyle />
      <Box>
        <Box px={[3,3,6]} py={[5,5]}>
          <Nav />
        </Box>

        <Box px={[3,3,6]} py={[5,5]}>
          <Box color={color.gray0} width={["100%", "670px"]} mx="auto">
            <Markdown
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Box>
        <Box px={[3,3,6]} py={[3,4]}>
          <Footer />
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
