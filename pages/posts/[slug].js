import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import CodeAnimation from "../../src/components/CodeAnimation";
import Head from 'next/head'
import { GlobalStyle, color } from "../../src/Tile";
import { Markdown } from "../../src/components/Text";
import { Box } from 'rebass/styled-components'

export default function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;
  

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Chivo:400,700"
          rel="stylesheet"
        />
        <title>React for Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <CodeAnimation />
      <Box px={[3, 3, 6]} py={[5, 5]}>
        <Box color={color.gray0} width={["100%", "600px"]} mx="auto">
          <Markdown>
            <ReactMarkdown escapeHtml={false} source={content} />
          </Markdown>
        </Box>
      </Box>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/${slug}.md`);

    // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to the component props
  return { ...data }
};
