import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle, color } from '../Tile'
import { Box } from 'rebass'
import { Markdown } from '../components/Text'
import CodeAnimation from '../components/CodeAnimation'
import PostFooter from './PostFooter'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import "./syntax-highlight.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  console.log("sleep", frontmatter)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <SEO
          title={frontmatter.title}
          image={frontmatter.image}
          description={frontmatter.description}
        />
        <Box>
        <CodeAnimation />
          <Box px={[3,3,6]} py={[5,5]}>
            <Box color={color.gray0} width={["100%", "600px"]} mx="auto">
              <Markdown
                dangerouslySetInnerHTML={{ __html: html }}
              />
            <PostFooter />
            </Box>
          </Box>
        </Box>
      </Layout>
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
        image
      }
    }
  }
`
